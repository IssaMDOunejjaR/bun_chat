import { staticPlugin } from "@elysiajs/static";
import { logger } from "@bogeychan/elysia-logger";
import { api } from "./controllers/*";
import { pages } from "./pages/*";
import Elysia from "elysia";
import { html } from "@elysiajs/html";
import { config } from "./config";
import { jwt } from "@elysiajs/jwt";
import { cookie } from "@elysiajs/cookie";

const app = new Elysia()
  .use(staticPlugin())
  .use(jwt({
    name: "jwt",
    secret: config.env.JWT_SECRET,
  }))
  .use(cookie())
  .use(html())
  .use(api)
  .use(pages)
  .listen(3000);

console.log(
  `app is listening on http://${app.server?.hostname}:${app.server?.port}`
);
