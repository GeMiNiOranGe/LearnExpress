import express from "express";

import config from "@/config";
import { errorRequestHandler, notFoundHandler } from "@/middlewares";
import createHttpError from "http-errors";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users/:id", (req, res, next) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    next(createHttpError(400, "User id must be a number"));
    return;
  }

  res.send(`Hello user with id ${id}`);
});

// 404 handler
app.use(notFoundHandler);

// catch 404 and forward to error handler
app.use(errorRequestHandler);

// Start server
app.listen(config.port, () => {
  process.stdout.write(
    `Server listening at http://localhost:${config.port} (${config.nodeEnv})\n`,
  );
});
