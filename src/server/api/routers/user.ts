import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from "../trpc";

import { 
    getUserTitles,
    makeUniversalSearch, } from "psn-api";

export const userRouter = createTRPCRouter({
    getUser:publicProcedure.input(
        z.object({text: z.string()}))
        .query(async ({ ctx, input })=> {
        const userRes = await makeUniversalSearch(
            ctx.authorization,
            input.text,
            "SocialAllAccounts"
        )
        const userData = userRes?.domainResponses[0]?.results[0]?.socialMetadata
        const targetAccountId = userRes?.domainResponses[0]?.results[0]?.socialMetadata.accountId;
        if (targetAccountId) {
            const { trophyTitles: games } = await getUserTitles(ctx.authorization, targetAccountId)
            return { ...userData, games }
        }
    }),
})