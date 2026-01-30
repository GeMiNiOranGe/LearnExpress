import http from "http";

import config from "@/config";
import app from "@/app";

const server = http.createServer(app);

// Start server
server.listen(config.port, () => {
  process.stdout.write(
    `Server listening at http://localhost:${config.port} (${config.nodeEnv})\n`,
  );
});

// Event listener for HTTP server "error" event.
server.on("error", (error: NodeJS.ErrnoException): void => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind =
    typeof config.port === "string"
      ? `Pipe ${config.port}`
      : `Port ${config.port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      process.stderr.write(`${bind} requires elevated privileges\n`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      process.stderr.write(`${bind} is already in use\n`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// Event listener for HTTP server "listening" event.
server.on("listening", (): void => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr?.port}`;
  process.stdout.write(`[DEBUG] Listening on ${bind}\n`);
});
