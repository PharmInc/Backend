import { z, createRoute } from "@hono/zod-openapi";
import { postSchema } from "@db/index";

export const getPost = createRoute({
  method: "get",
  path: "/post",
  description: "Get all posts",
  tags: ["Post"],
  responses: {
    200: {
      description: "Post found",
      content: {
        "application/json": {
          schema: z.array(postSchema),
        },
      },
    },
    404: { description: "Post not found" },
  },
});

export const getPostsById = createRoute({
  method: "get",
  path: "/post/{id}",
  description: "Get all posts by user ID",
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
          schema: z.array(postSchema),
        },
      },
    },
    404: { description: "Post not found" },
  },
});
