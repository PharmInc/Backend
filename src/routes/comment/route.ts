import { z, createRoute } from "@hono/zod-openapi";
import { commentSchema, createCommentSchema } from "@db/index";

export const createComment = createRoute({
  method: "post",
  path: "/",
  tags: ["Comment"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createCommentSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    201: { description: "Comment created" },
    400: { description: "Bad request" },
  },
});

export const getComment = createRoute({
  method: "get",
  path: "/{id}",
  description: "Get comment by ID",
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
          schema: commentSchema,
        },
      },
    },
    404: { description: "Comment not found" },
  },
});

export const updateComment = createRoute({
  method: "put",
  path: "/{id}",
  tags: ["Comment"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        "application/json": {
          schema: commentSchema.partial(),
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    200: { description: "Comment updated" },
    404: { description: "Comment not found" },
  },
});

export const deleteComment = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["Comment"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "Comment deleted" },
    404: { description: "Comment not found" },
  },
});
