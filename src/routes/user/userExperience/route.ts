import { z, createRoute } from "@hono/zod-openapi";
import { createUserExperienceSchema, userExperienceSchema } from "@db/index";

export const createUserExperience = createRoute({
  method: "post",
  path: "/",
  tags: ["UserExperience"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createUserExperienceSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    201: { description: "Experience created" },
    404: { description: "User not found" },
  },
});

export const getUserExperience = createRoute({
  method: "get",
  path: "/{id}",
  tags: ["UserExperience"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "Experience found",
      content: {
        "application/json": {
          schema: userExperienceSchema,
        },
      },
    },
    404: { description: "Not found" },
  },
});

export const updateUserExperience = createRoute({
  method: "put",
  path: "/{id}",
  tags: ["UserExperience"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        "application/json": {
          schema: createUserExperienceSchema.partial(),
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

export const deleteUserExperience = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["UserExperience"],
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
