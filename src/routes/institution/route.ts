import { z, createRoute } from "@hono/zod-openapi";
import { institutionSchema, createInstitutionSchema } from "@db/index";

export const createInstitution = createRoute({
  method: "post",
  path: "/",
  tags: ["Institution"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createInstitutionSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    201: {
      description: "Institution created",
      content: {
        "application/json": {
          schema: z.string().uuid(),
        },
      },
    },
    400: { description: "Bad request" },
  },
});

export const getInstitution = createRoute({
  method: "get",
  path: "/{id}",
  tags: ["Institution"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "Institution found",
      content: {
        "application/json": {
          schema: institutionSchema,
        },
      },
    },
    404: { description: "Institution not found" },
  },
});

export const updateInstitution = createRoute({
  method: "put",
  path: "/{id}",
  tags: ["Institution"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        "application/json": {
          schema: institutionSchema.partial(),
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    200: { description: "Institution updated" },
    404: { description: "Institution not found" },
  },
});

export const deleteInstitution = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["Institution"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "Institution deleted" },
    404: { description: "Institution not found" },
  },
});
