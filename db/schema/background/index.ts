import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";
import { userTable } from "../user";
import { instituteTable } from "../institute";

const base = {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  title: text("title").notNull(),
  description: text("description").notNull(),
  startDate: timestamp("start_date", { withTimezone: true }).notNull(),
  endDate: timestamp("end_date", { withTimezone: true }),

  userId: uuid("user_id").references(() => userTable.id),
  institutionId: uuid("institution_id").references(() => instituteTable.id),
};

export const educationTable = pgTable("education", { ...base });

export const experienceTable = pgTable("experience", { ...base });
