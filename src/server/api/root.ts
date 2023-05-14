import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "~/server/api/routers/user";
import { gameRouter } from "~/server/api/routers/game";
import { authRouter } from "~/server/api/routers/auth"
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  game: gameRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
