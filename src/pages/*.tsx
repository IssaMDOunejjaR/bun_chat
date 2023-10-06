import { Elysia } from "elysia";
import { socket } from "./socket";
import { Home } from "./index";

export const pages = new Elysia()
  .use(socket)
  .get("/", () => <Home />);
