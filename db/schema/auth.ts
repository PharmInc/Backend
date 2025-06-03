import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";
import { z } from "@hono/zod-openapi";

export const authTable = pgTable("auth", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export const authSchema = z
  .object({
    email: z.string().email().openapi({ example: "example@example.com" }),
    password: z.string().openapi({ example: "password" }),
  })
  .openapi("authSchema");
