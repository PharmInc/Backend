import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";
import { z } from "@hono/zod-openapi";

export const institutionTable = pgTable("institution", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  name: text("name").notNull().unique(),
  profilePicture: text("profile_picture"),
  about: text("about"),
  location: text("location"),
});

export const createInstitutionSchema = z.object({
  name: z.string().openapi({ example: "AIIMS Delhi" }),
  about: z.string().openapi({ example: "Premier medical institute" }),
  location: z.string().openapi({ example: "New Delhi, India" }),
});

export const institutionSchema = createInstitutionSchema
  .extend({
    id: z.string().uuid(),
    profilePicture: z.string().optional(),
  })
  .openapi("institutionSchema");
