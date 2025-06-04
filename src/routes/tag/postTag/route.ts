import { z, createRoute } from "@hono/zod-openapi";
import { postTagSchema, createPostTagSchema } from "@db/index";

export const createPostTag = createRoute({
  method: "post",
  path: "/",
  tags: ["PostTag"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createPostTagSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    201: { description: "Post-Tag relation created" },
    400: { description: "Bad request" },
  },
});

export const getPostTag = createRoute({
  method: "get",
  path: "/{id}",
  tags: ["PostTag"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "Post-Tag relation found",
      content: {
        "application/json": {
          schema: postTagSchema,
        },
      },
    },
    404: { description: "Post-Tag relation not found" },
  },
});

export const updatePostTag = createRoute({
  method: "put",
  path: "/{id}",
  tags: ["PostTag"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        "application/json": {
          schema: createPostTagSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    200: { description: "Post-Tag relation updated" },
    404: { description: "Post-Tag relation not found" },
  },
});

export const deletePostTag = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["PostTag"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "Post-Tag relation deleted" },
    404: { description: "Post-Tag relation not found" },
  },
});
