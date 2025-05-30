import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";

export const institutionTable = pgTable("institution", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  name: text("name").notNull().unique(),
  profilePicture: text("profile_picture"),
  about: text("about"),
  location: text("location"),
});

export type InsertInstitution = typeof institutionTable.$inferInsert;
export type SelectInstitution = typeof institutionTable.$inferSelect;
