import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./dist/db/schema/**/*",
  out: "./dist/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
