import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { getUserTrophiesEarnedForTitle } from 'psn-api'

export const gameRouter = createTRPCRouter({
    getGameDetails: publicProcedure
    .input(z.object({
        gameId: z.string(),
        options: z.string(),
        userId: z.string()}))
    .query(async ({input, ctx}) => {
        const res = await getUserTrophiesEarnedForTitle(
            ctx.authorization,
            input.userId,
            input.gameId, 
            'default', 
            {npServiceName: input.options === 'trophy' ? input.options :
            undefined })
        const platt = res.rarestTrophies?.find(t => t.trophyType === 'platinum')
        if (!platt) {
            return null
        }
        return platt
    })
})