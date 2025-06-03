import { z, createRoute } from "@hono/zod-openapi";
import { createUserEducationSchema, userEducationSchema } from "@db/index";

export const createUserEducation = createRoute({
  method: "post",
  path: "/",
  tags: ["UserEducation"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createUserEducationSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    201: { description: "Education created" },
    404: { description: "User not found" },
  },
});

export const getUserEducation = createRoute({
  method: "get",
  path: "/{id}",
  tags: ["UserEducation"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "Education found",
      content: {
        "application/json": {
          schema: userEducationSchema,
        },
      },
    },
    404: { description: "Not found" },
  },
});

export const updateUserEducation = createRoute({
  method: "put",
  path: "/{id}",
  tags: ["UserEducation"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        "application/json": {
          schema: createUserEducationSchema.partial(),
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    200: { description: "Updated" },
    404: { description: "Not found" },
  },
});

export const deleteUserEducation = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["UserEducation"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "Deleted" },
    404: { description: "Not found" },
  },
});
