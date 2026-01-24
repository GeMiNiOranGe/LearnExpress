import type { ErrorRequestHandler } from "express";
import type { HttpError } from "http-errors";

import { isDevEnv } from "@/utilities";

const errorRequestHandler: ErrorRequestHandler = (
  err: HttpError,
  req,
  res,
  _next,
) => {
  const status = err.status || 500;

  res.status(status).json({
    status,
    message: err.message || "Internal Server Error",
  });

  if (isDevEnv() && err.stack) {
    process.stdout.write(err.stack + "\n");
  }
};

export default errorRequestHandler;
