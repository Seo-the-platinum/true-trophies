import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from "../trpc";
import { authorization } from "../../../utils/authorization";
import { 
    getUserTitles,
    makeUniversalSearch, } from "psn-api";

export const userRouter = createTRPCRouter({
    getUser:publicProcedure.input(z.object({text: z.string()})).query(async ({ input })=> {
        const auth = await authorization()
        const userRes = await makeUniversalSearch(
            auth,
            input.text,
            "SocialAllAccounts"
        )
        const userData = userRes?.domainResponses[0]?.results[0]?.socialMetadata
        const targetAccountId = userRes?.domainResponses[0]?.results[0]?.socialMetadata.accountId;
        if (targetAccountId) {
            const { trophyTitles: games } = await getUserTitles(auth, targetAccountId)
            return { ...userData, games }
        }
    }),
})