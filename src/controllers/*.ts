import { Elysia } from "elysia";
import { auth } from "./auth"

export const api = new Elysia({
  prefix: "/api",
})
  .use(auth);
