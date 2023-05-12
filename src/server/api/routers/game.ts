import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { getUserTrophiesEarnedForTitle } from 'psn-api'
import { authorization } from '../../../utils/authorization'

export const gameRouter = createTRPCRouter({
    getGameDetails: publicProcedure
    .input(z.object({gameId: z.string(), options: z.string(), userId: z.string()}))
    .query(async ({input}) => {
        const auth = await authorization()
        const res = await getUserTrophiesEarnedForTitle(
            auth,
            input.userId,
            input.gameId, 
            'default', 
            {npServiceName: input.options === 'trophy' ? input.options :
            undefined })
        const platt = res.rarestTrophies?.find(t => t.trophyType === 'platinum')
        return platt
    })
})