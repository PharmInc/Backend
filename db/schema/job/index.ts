import { pgTable, uuid, timestamp, text, boolean } from "drizzle-orm/pg-core";
import { instituteTable } from "../institute";

export const jobTable = pgTable("job", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  title: text("title").notNull(),
  description: text("description").notNull(),
  payRange: text("pay_range").notNull(),
  benefits: text("benefits").notNull(),
  category: text("category").notNull(),
  location: text("location").notNull(),
  role: text("role").notNull(),
  workLocation: text("work_location").notNull(),
  experienceLevel: text("experience_level").notNull(),

  active: boolean("active").default(true),

  instituteId: uuid("institute_id")
    .notNull()
    .references(() => instituteTable.id),
});
