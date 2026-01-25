import express, { type RequestHandler } from "express";
import createHttpError from "http-errors";

const router = express.Router();

const getUserById: RequestHandler = (req, res, next) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    next(createHttpError(400, "User id must be a number"));
    return;
  }

  res.send(`Hello user with id ${id}`);
};

router.get("/:id", getUserById);

export default router;
