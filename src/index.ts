import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { jwt } from "hono/jwt";
import { cors } from "hono/cors";
import { type JwtVariables } from "hono/jwt";
import "dotenv/config";

import authRouter from "./routes/auth/index";
import userRouter from "./routes/user/index";
import institutionRouter from "./routes/institution/index";
import userEducationRouter from "./routes/userEducation/index";
import userExperienceRouter from "./routes/userExperience/index";

type Variables = JwtVariables;

const app = new OpenAPIHono<{ Variables: Variables }>();

// JWT setup
const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET not set");
}

// Middlewares
app.openAPIRegistry.registerComponent("securitySchemes", "Bearer", {
  type: "http",
  scheme: "bearer",
});
app.use("*", cors({ origin: process.env.ALLOWED_ORIGINS?.split(",") || [] }));

app.use("*", async (c, next) => {
  const path = c.req.path;

  const isPublic =
    path.startsWith("/auth") || path === "/openapi" || path === "/docs";

  if (isPublic) {
    return next();
  }

  // Apply JWT if route is not public
  return jwt({ secret })(c, next);
});

// imported routes
app.route("/auth", authRouter);
app.route("/user", userRouter);
app.route("/institution", institutionRouter);
app.route("/user/education", userEducationRouter);
app.route("/user/experience", userExperienceRouter);

// Routes
app.get("/", (c) => c.text("Server is alive!"));

/**
 * Check if JWT token is expired
 */
app.get("/jwt/check", async (c) => {
  const token = c.get("jwtPayload");
  const currentTime = Math.floor(Date.now() / 1000);

  if (token.exp && token.exp < currentTime) {
    return c.json({ valid: false, message: "Token has expired" }, 401);
  }

  return c.json({ valid: true, expiresIn: token.exp - currentTime });
});

// Documentation and server start
app.doc("/openapi", {
  openapi: "3.0.0",
  info: {
    version: "0.0.1",
    title: "PharmInc API",
  },
});

app.get("/docs", swaggerUI({ url: "/openapi" }));

export default app;
