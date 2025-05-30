import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";

export const authTable = pgTable("auth", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export type InsertAuth = typeof authTable.$inferInsert;
export type SelectAuth = typeof authTable.$inferSelect;
