import { z, createRoute } from "@hono/zod-openapi";
import { institutionSchema } from "@db/index";

export const getInstitution = createRoute({
  method: "get",
  path: "/institution/",
  description: "Get all institutions",
  tags: ["Institution"],
  responses: {
    200: {
      description: "Institution found",
      content: {
        "application/json": {
          schema: z.array(institutionSchema),
        },
      },
    },
    404: { description: "Institution not found" },
  },
});

export const getInstitutionById = createRoute({
  method: "get",
  path: "/institution/{id}",
  description: "Get an institution by institution ID",
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
