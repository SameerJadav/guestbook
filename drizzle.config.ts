import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./src/server/db/schema.ts",
  driver: "turso",
  dbCredentials: {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  tablesFilter: ["guestbook_*"],
  out: "./drizzle",
};

export default config;
