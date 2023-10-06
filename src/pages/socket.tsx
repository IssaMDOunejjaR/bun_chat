import Elysia from "elysia";

export const socket = new Elysia()
  .ws("/ws", {
    message: (ws, message: any) => {
      ws.send(
        <div hx-swap-oob="beforeend:#msg">
          <h1>${message.msg}</h1>
        </div>
      );
    }
  })
