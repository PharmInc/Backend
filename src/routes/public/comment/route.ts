import { z, createRoute } from "@hono/zod-openapi";
import { commentSchema } from "@db/index";

export const getComment = createRoute({
  method: "get",
  path: "/comment",
  description: "Get comment by ID",
  tags: ["Comment"],
  responses: {
    200: {
      description: "Comments found",
      content: {
        "application/json": {
          schema: z.array(commentSchema),
        },
      },
    },
    404: { description: "No comments found" },
  },
});

export const getCommentById = createRoute({
  method: "get",
  path: "/comment/{id}",
  description: "Get all comments by user ID",
  tags: ["Comment"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "Comment found",
      content: {
        "application/json": {
          schema: z.array(commentSchema),
        },
      },
    },
    404: { description: "Comment not found" },
  },
});
