import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";
import { authTable } from "./auth";
import { z } from "@hono/zod-openapi";

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

export const createUserSchema = z.object({
  firstName: z.string().openapi({ example: "John" }),
  lastName: z.string().openapi({ example: "Doe" }),
  specialization: z.string().openapi({ example: "Cardiology" }),
});

export const userSchema = createUserSchema
  .extend({
    id: z.string().uuid(),
    email: z.string().email().openapi({ example: "example@example.com" }),
    profilePicture: z.string().optional(),
    about: z.string().optional(),
    authId: z.string().uuid().optional(),
  })
  .openapi("userSchema");
