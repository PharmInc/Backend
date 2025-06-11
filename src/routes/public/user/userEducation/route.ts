import { z, createRoute } from "@hono/zod-openapi";
import { userEducationSchema } from "@db/index";

export const getUserEducation = createRoute({
  method: "get",
  path: "/user/education",
  description: "Get all user education entries",
  tags: ["UserEducation"],
  responses: {
    200: {
      description: "Education records found",
      content: {
        "application/json": {
          schema: z.array(userEducationSchema),
        },
      },
    },
    404: { description: "No education records found" },
  },
});

export const getUserEducationById = createRoute({
  method: "get",
  path: "/user/education/{id}",
  description: "Get all education entries by user ID",
  tags: ["UserEducation"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "Education records found for user",
      content: {
        "application/json": {
          schema: z.array(userEducationSchema),
        },
      },
    },
    404: { description: "No education records found for user" },
  },
});
