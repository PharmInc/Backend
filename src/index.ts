import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { jwt } from "hono/jwt";
import { cors } from "hono/cors";
import { type JwtVariables } from "hono/jwt";
import { serve } from "@hono/node-server";
import "dotenv/config";

import authRouter from "./routes/auth/index";
import userRouter from "./routes/user/index";

import postRouter from "./routes/post";
import commentRouter from "./routes/comment";

import institutionRouter from "./routes/institution/index";
import userEducationRouter from "./routes/user/userEducation/index";
import userExperienceRouter from "./routes/user/userExperience/index";
import connectionRouter from "./routes/connection";

import { default as pubUserRouter } from "./routes/public/user/index";

import { default as pubPostRouter } from "./routes/public/post";
import { default as pubCommentRouter } from "./routes/public/comment";

import { default as pubInstitutionRouter } from "./routes/public/institution/index";
import { default as pubUserEducationRouter } from "./routes/public/user/userEducation/index";
import { default as pubUserExperienceRouter } from "./routes/public/user/userExperience/index";

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
app.use("*", cors());

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
app.route("/post", postRouter);
app.route("/comment", commentRouter);
app.route("/institution", institutionRouter);
app.route("/connection", connectionRouter);

app.route("/user/education", userEducationRouter);
app.route("/user/experience", userExperienceRouter);

// public routes
app.route("/public", pubUserRouter);
app.route("/public", pubPostRouter);
app.route("/public", pubCommentRouter);
app.route("/public", pubInstitutionRouter);

app.route("/public", pubUserEducationRouter);
app.route("/public", pubUserExperienceRouter);

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

const port = 3000;
console.log(`Server running at http://localhost:${port}`);

serve({ fetch: app.fetch, port });
