import { 
    exchangeNpssoForCode,
    exchangeCodeForAccessToken } from "psn-api";

export const authorization = async ()=> {
    const accessCode = await exchangeNpssoForCode(process.env.NPSSO as string)
    const authorization = await exchangeCodeForAccessToken(accessCode);
    return authorization
}