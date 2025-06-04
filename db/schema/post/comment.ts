import { pgTable, uuid } from "drizzle-orm/pg-core";

import { postTable } from "./post";
import { basePost } from "./basePost";

import { z } from "@hono/zod-openapi";

export const commentTable = pgTable("comment", {
  ...basePost,

  postId: uuid("post_id")
    .references(() => postTable.id, { onDelete: "cascade" })
    .notNull(),

  parentId: uuid("parent_id")
})

export const createCommentSchema = z
  .object({
    content: z.string().min(1).openapi({ example: "Great post!" }),
    postId: z.string().uuid().openapi({ example: "aa72e0a5-7e1c-4cd9-9d63-6f0282489781" }),
    parentId: z.string().uuid().optional().openapi({ example: "bb82e0a5-1e1c-4cd9-1d63-7f0182489782" }),
    userId: z.string().uuid().openapi({ example: "cc92e0a5-2e2c-4cd9-2d63-8f0282489783" }),
  })

export const commentSchema = createCommentSchema
  .extend({
    id: z.string().uuid().openapi({ example: "dd02e0a5-3e3c-4cd9-3d63-9f0382489784" }),
    createdAt: z.string().datetime().openapi({ example: "2025-06-05T14:45:00Z" }),
    updatedAt: z.string().datetime().openapi({ example: "2025-06-05T14:45:00Z" }),

    reactions: z.string().optional().openapi({ example: "10" }),
    shares: z.string().optional().openapi({ example: "2" }),
    saves: z.string().optional().openapi({ example: "7" }),
  })
  .openapi("commentSchema");
