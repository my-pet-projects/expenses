import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    EXPENSES_DATABASE_URL: z.string().url(),
    EXPENSES_DATABASE_TOKEN: z.string(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    CLERK_SECRET_KEY: z.string(),
  },

  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    EXPENSES_DATABASE_URL: process.env["EXPENSES_DATABASE_URL"],
    EXPENSES_DATABASE_TOKEN: process.env["EXPENSES_DATABASE_TOKEN"],
    NODE_ENV: process.env["NODE_ENV"],
    CLERK_SECRET_KEY: process.env["CLERK_SECRET_KEY"],
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env["NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"],
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env["NEXT_PUBLIC_CLERK_SIGN_IN_URL"],
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: process.env["NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL"],
  },
  skipValidation: !!process.env["SKIP_ENV_VALIDATION"],
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
