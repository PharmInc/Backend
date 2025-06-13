import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";

export const authTable = pgTable("auth", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  lastLogin: timestamp("last_login", { withTimezone: true }).defaultNow(),

  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  type: text("type").notNull().default("user"),
});
