import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";
import { userTable } from "./user";
import { institutionTable } from "./institution";
import { z } from "@hono/zod-openapi";

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

export const createUserEducationSchema = z.object({
  title: z.string().openapi({ example: "MBBS" }),
  description: z.string().openapi({ example: "Bachelor of Medicine" }),
  startDate: z.string().datetime().openapi({ example: "2020-08-01T00:00:00Z" }),
  endDate: z.string().datetime().optional(),
  institutionId: z.string().uuid().openapi({ example: "institution-uuid" }),
});

export const userEducationSchema = createUserEducationSchema
  .extend({
    id: z.string().uuid(),
    userId: z.string().uuid(),
  })
  .openapi("userEducationSchema");
