import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from "../trpc";
import { 
    exchangeNpssoForCode,
    exchangeCodeForAccessToken,
    getUserTitles,
    makeUniversalSearch, } from "psn-api";

const authorization = async ()=> {
    const accessCode = await exchangeNpssoForCode(process.env.NPSSO as string)
    const authorization = await exchangeCodeForAccessToken(accessCode);
    return authorization
}

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
            const { trophyTitles } = await getUserTitles(auth, targetAccountId)
            return { userData, trophyTitles }
        }
    }),
})