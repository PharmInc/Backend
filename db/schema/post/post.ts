import { pgTable, uuid, text } from "drizzle-orm/pg-core";

import { userTable } from "../user";
import { basePost } from "./basePost";

import { z } from "@hono/zod-openapi";

export const postTable = pgTable("post", {
  ...basePost,

  imageId: text("image_id"),

  userId: uuid("user_id").references(() => userTable.id, {
    onDelete: "cascade",
  }),
});

export const createPostSchema = z
  .object({
    content: z.string().min(1).openapi({ example: "Just finished my shift at the hospital!" }),
    userId: z.string().uuid().openapi({ example: "9b2a4b1e-3f68-4d4e-83db-d53b5d470fcd" }),
  })

export const postSchema = createPostSchema
  .extend({
    id: z.string().uuid().openapi({ example: "1a2b3c4d-5678-9101-1121-314151617181" }),
    createdAt: z.string().datetime().openapi({ example: "2025-06-05T14:30:00Z" }),
    updatedAt: z.string().datetime().openapi({ example: "2025-06-05T14:30:00Z" }),

    reactions: z.string().optional().openapi({ example: "10" }),
    shares: z.string().optional().openapi({ example: "2" }),
    saves: z.string().optional().openapi({ example: "6" }),

    imageId: z.string().optional().openapi({ example: "1a2b3c4d-5678-9101-1121-314151617181" }),
  })
  .openapi("postSchema");