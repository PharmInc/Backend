import { z, createRoute } from "@hono/zod-openapi";
import { tagSchema, createTagSchema } from "@db/index";

export const createTag = createRoute({
  method: "post",
  path: "/",
  tags: ["Tag"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createTagSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    201: {
      description: "Tag created",
      content: {
        "application/json": {
          schema: z.string().uuid(),
        },
      },
    },
    400: { description: "Bad request" },
  },
});

export const getTag = createRoute({
  method: "get",
  path: "/{id}",
  tags: ["Tag"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "Tag found",
      content: {
        "application/json": {
          schema: tagSchema,
        },
      },
    },
    404: { description: "Tag not found" },
  },
});

export const updateTag = createRoute({
  method: "put",
  path: "/{id}",
  tags: ["Tag"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        "application/json": {
          schema: createTagSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    200: { description: "Tag updated" },
    404: { description: "Tag not found" },
  },
});

export const deleteTag = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["Tag"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "Tag deleted" },
    404: { description: "Tag not found" },
  },
});
