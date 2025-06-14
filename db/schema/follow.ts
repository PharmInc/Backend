import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";
import { userTable } from "./user";
import { z } from "@hono/zod-openapi";

export const followTable = pgTable("follow", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),

  userId: uuid("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),

  followerId: uuid("auth_id")
    .unique()
    .references(() => userTable.id, { onDelete: "cascade" }),
});


export const followSchema = z.object({
    id: z.string().uuid().openapi({ example: "7b8e5b9f-7f67-4cc9-a9c6-8e0c2adf5c01" }),
    userId: z.string().uuid().openapi({ example: "9a5e739e-1f34-4be3-bd6f-c5672f45ac83" }),
    connectorId: z.string().uuid().openapi({ example: "cfaf15e3-c949-49ab-8127-2e3f193a47a6" }),
    createdAt: z.string().datetime({ offset: true }).openapi({ example: "2025-06-11T18:30:00.000Z" }),
  })
  .openapi("followchema");
