import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: env.EXPENSES_DATABASE_URL,
    authToken: env.EXPENSES_DATABASE_TOKEN,
  },
  tablesFilter: ["expenses_*"],
} satisfies Config;
