import express from "express";

import { SystemInfoController } from "@/controllers";

const router = express.Router();

router.head("/ping", SystemInfoController.getPing);
router.get("/health", SystemInfoController.getHealthCheck);
router.get("/ready", SystemInfoController.getReadinessCheck);
router.get("/info", SystemInfoController.getInfo);
router.get("/version", SystemInfoController.getVersion);

export default router;
