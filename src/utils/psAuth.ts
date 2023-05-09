import { exchangeNpssoForCode, exchangeCodeForAccessToken } from "psn-api";

export const getPsAuth = async ()=> {
    const accessCode = await exchangeNpssoForCode(process.env.NPSSO)
    const authorization = await exchangeCodeForAccessToken(accessCode);
    return authorization;
  }