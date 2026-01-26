import express from "express";

import { UserController } from "@/controllers";

const router = express.Router();

router.get("/:id", UserController.getById);

export default router;
