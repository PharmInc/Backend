import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";
import { userTable } from "./user";
import { institutionTable } from "./institution";

export const userEducationTable = pgTable("user_education", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  title: text("title").notNull(),
  description: text("description").notNull(),
  startDate: timestamp("start_date", { withTimezone: true }).notNull(),
  endDate: timestamp("end_date", { withTimezone: true }),

  userId: uuid("user_id").references(() => userTable.id, {
    onDelete: "cascade",
  }),
  institutionId: uuid("institution_id").references(() => institutionTable.id, {
    onDelete: "set null",
  }),
});

export type InsertUserEducation = typeof userEducationTable.$inferInsert;
export type SelectUserEducation = typeof userEducationTable.$inferSelect;
