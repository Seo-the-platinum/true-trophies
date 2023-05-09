import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from "../trpc";
import { exchangeNpssoForCode, exchangeCodeForAccessToken, makeUniversalSearch } from "psn-api";

export const userRouter = createTRPCRouter({
    getUser:publicProcedure.input(z.object({text: z.string()})).query(async ({ input })=> {
        const accessCode = await exchangeNpssoForCode(process.env.NPSSO)
        const authorization = await exchangeCodeForAccessToken(accessCode);
        const res = await makeUniversalSearch(
            authorization,
            input.text,
            "SocialAllAccounts"
        )
        return res
    })
})