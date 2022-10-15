import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
import { Server } from "https://deno.land/x/socket_io@0.2.0/mod.ts";

const io = new Server({
  cors: {
    credentials: false,
  },
  allowRequest: (_req, _connInfo) => {
    return Promise.resolve();
  },
});

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  socket.on("register", (round) => {
    socket.on(round.id, (message: unknown) => {
      socket.emit(round.id, message);
    });
  });
  socket.emit("hello", "world");

  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});

let count = 0;
setInterval(() => {
  count = count + 1;
  io.emit("round.new", { value: count });
}, 1000);

function handler(_req: Request): Response {
  const body = JSON.stringify({ message: "NOT FOUND" });
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}

serve(handler, { port: 3030 });

await serve(io.handler(), {
  port: 8080,
});
