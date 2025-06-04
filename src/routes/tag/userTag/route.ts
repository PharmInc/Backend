import { z, createRoute } from "@hono/zod-openapi";
import { userTagSchema, createUserTagSchema } from "@db/index";

export const createUserTag = createRoute({
  method: "post",
  path: "/",
  tags: ["UserTag"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createUserTagSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    201: { description: "User-Tag relation created" },
    400: { description: "Bad request" },
  },
});

export const getUserTag = createRoute({
  method: "get",
  path: "/{id}",
  tags: ["UserTag"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "User-Tag relation found",
      content: {
        "application/json": {
          schema: userTagSchema,
        },
      },
    },
    404: { description: "User-Tag relation not found" },
  },
});

export const updateUserTag = createRoute({
  method: "put",
  path: "/{id}",
  tags: ["UserTag"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        "application/json": {
          schema: createUserTagSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    200: { description: "User-Tag relation updated" },
    404: { description: "User-Tag relation not found" },
  },
});

export const deleteUserTag = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["UserTag"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "User-Tag relation deleted" },
    404: { description: "User-Tag relation not found" },
  },
});
