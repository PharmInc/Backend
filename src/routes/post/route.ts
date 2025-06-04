import { z, createRoute } from "@hono/zod-openapi";
import { postSchema, createPostSchema } from "@db/index";

export const createPost = createRoute({
  method: "post",
  path: "/",
  tags: ["Post"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createPostSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    201: { description: "Post created" },
    400: { description: "Bad request" },
  },
});

export const getPost = createRoute({
  method: "get",
  path: "/{id}",
  description: "Get post by ID",
  tags: ["Post"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "Post found",
      content: {
        "application/json": {
          schema: postSchema.extend({ id: z.string().uuid() }),
        },
      },
    },
    404: { description: "Post not found" },
  },
});

export const updatePost = createRoute({
  method: "put",
  path: "/{id}",
  tags: ["Post"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        "application/json": {
          schema: postSchema.partial(),
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    200: { description: "Post updated" },
    404: { description: "Post not found" },
  },
});

export const deletePost = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["Post"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "Post deleted" },
    404: { description: "Post not found" },
  },
});
