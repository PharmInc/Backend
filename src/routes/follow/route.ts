import { followSchema } from "@db/index";
import { z, createRoute } from "@hono/zod-openapi";

export const createFollow = createRoute({
  method: "post",
  path: "/{id}",
  tags: ["Follow"],
  request: {
    params: z.object({
      id: z
        .string()
        .uuid()
        .openapi({ example: "f91d36c5-3020-4178-b82e-8be298bd712c" }),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    201: { description: "Follow created" },
    400: { description: "Invalid request" },
    404: { description: "User or connector not found" },
  },
});

export const deleteFollow = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["Follow"],
  request: {
    params: z.object({
      id: z
        .string()
        .uuid()
        .openapi({ example: "f91d36c5-3020-4178-b82e-8be298bd712c" }),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "Follow deleted" },
    404: { description: "Follow not found" },
  },
});

export const getFollow = createRoute({
  method: "get",
  path: "/",
  description: "Get all Follows",
  tags: ["Follow"],
  security: [{ Bearer: [] }],
  responses: {
    200: {
      description: "Follows found",
      content: {
        "application/json": {
          schema: z.array(followSchema),
        },
      },
    },
    404: { description: "No Follows found" },
  },
});
