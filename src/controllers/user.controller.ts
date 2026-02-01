import type { RequestHandler } from "express";
import createHttpError from "http-errors";

import type {
  GetUserByIdParams,
  GetUserByIdResponse,
  GetUsersResponse,
} from "@/types";

/**
 * Get users endpoint.
 *
 * Purpose:
 * - Returns a list of users
 *
 * Notes:
 * - Currently returns a placeholder response
 * - Will be replaced with real data fetching logic
 */
const handleGetMany: RequestHandler<"", GetUsersResponse> = (_req, res) => {
  res.send("Hello users");
};

/**
 * Get user by ID endpoint.
 *
 * Purpose:
 * - Retrieves a single user by its identifier
 *
 * Validation:
 * - Ensures the `id` route parameter is a valid number
 *
 * Errors:
 * - Returns HTTP 400 if the provided id is not numeric
 */
const handleGetById: RequestHandler<GetUserByIdParams, GetUserByIdResponse> = (
  req,
  res,
  next,
) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    next(createHttpError(400, "User id must be a number"));
    return;
  }

  res.send(`Hello user with id ${id}`);
};

export default {
  handleGetMany,
  handleGetById,
};
