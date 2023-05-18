import { Hono } from "hono";

import { prettyJSON } from "hono/pretty-json";
const app = new Hono();

app.use("*", prettyJSON());

app.get("/", (c) => c.text("Hello Hono!"));

app.get("/hello", (c) => {
  return c.json({
    ok: true,
    message: "Hello Hono!",
  });
});

export default app;
