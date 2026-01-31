import express from "express";

import { SystemInfoController } from "@/controllers";

const router = express.Router();

router.head("/ping", SystemInfoController.handlePing);
router.get("/health", SystemInfoController.handleHealthCheck);
router.get("/ready", SystemInfoController.handleReadinessCheck);
router.get("/info", SystemInfoController.handleServiceInfo);
router.get("/version", SystemInfoController.handleBuildInfo);

export default router;
