export const BaseHtml = ({ children }: any) => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Chat</title>
      <script src="https://unpkg.com/htmx.org@1.9.6"></script>
      <script src="https://unpkg.com/htmx.org/dist/ext/ws.js"></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css"
      />
    </head>
    <body>
      {children}
    </body>
  </html>
);

export const Home = () => (
  <BaseHtml>
    <div hx-ext="ws" ws-connect="/ws">
      <div id="msg">
        <h1>First</h1>
      </div>

      <form ws-send>
        <input name="msg" />
      </form>
    </div>
  </BaseHtml>
)
