import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";
import { authTable } from "./auth";

export const userTable = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  specialization: text("specialization").notNull(),

  profilePicture: text("profile_picture"),
  about: text("about"),

  authId: uuid("auth_id")
    .unique()
    .references(() => authTable.id, { onDelete: "cascade" }),
});

export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;
