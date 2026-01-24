import type { RequestHandler } from "express";
import createHttpError from "http-errors";

const notFoundHandler: RequestHandler = (req, res, next) => {
  next(createHttpError(404));
};

export default notFoundHandler;
