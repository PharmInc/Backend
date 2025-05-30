import { serve } from "@hono/node-server";
import app from "./src/index.js";

const port = 3000;
console.log(`Server running at http://localhost:${port}`);

serve({ fetch: app.fetch, port });
