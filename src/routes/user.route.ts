import express from "express";

import { UserController } from "@/controllers";

const router = express.Router();

router.get("/", UserController.handleGetMany);
router.get("/:id", UserController.handleGetById);

export default router;
