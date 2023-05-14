import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { 
    exchangeNpssoForCode,
    exchangeCodeForAccessToken, 
    exchangeRefreshTokenForAuthTokens} from "psn-api";

export const authRouter = createTRPCRouter({
    getAuth: publicProcedure.query(async ()=> {
        const accessCode = await exchangeNpssoForCode(process.env.NPSSO as string)
        const authorization = await exchangeCodeForAccessToken(accessCode);
        const now = new Date()
        const expirationDate = new Date(
            now.getTime() + authorization.expiresIn * 1000
        ).toISOString()
    
        const isAccessTokenExpired = new Date(expirationDate).getTime() < now.getTime()
        if (isAccessTokenExpired) {
            const updatedAuthorization = await exchangeRefreshTokenForAuthTokens(authorization.refreshToken)
            return updatedAuthorization
        }
        return authorization
    })
})