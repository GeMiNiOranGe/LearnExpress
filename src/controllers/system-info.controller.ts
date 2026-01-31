import type { RequestHandler } from "express";

import config from "@/config";
import pkg from "package.json";

/**
 * Ping endpoint handler
 * - Dùng để kiểm tra process còn sống hay không
 * - Không có body
 * - Không side-effect
 * - Trả về HTTP 200 nếu service đang chạy
 */
const getPing: RequestHandler = (req, res, _next) => {
  res.sendStatus(200);
};

/**
 * Health check handler
 * - Hiện tại: chỉ phản hồi OK
 * - Tương lai: có thể mở rộng check DB / cache / external services
 */
const getHealthCheck: RequestHandler = (req, res, _next) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};

/**
 * Readiness check handler
 * - Dùng cho load balancer / Kubernetes readiness probe
 * - Có thể khác logic với /health trong tương lai
 */
const getReadinessCheck: RequestHandler = (req, res, _next) => {
  // implement your readiness logic here
  const ready = true;

  if (!ready) {
    res.sendStatus(503);
    return;
  }

  res.sendStatus(200);
};

const getInfo: RequestHandler = (req, res, _next) => {
  res.status(200).json({
    name: pkg.name,
    version: pkg.version,
    author: pkg.author,
    license: pkg.license,
    homepage: pkg.homepage,
    environment: config.nodeEnv,
    nodeVersion: process.version,
  });
};

const getVersion: RequestHandler = (req, res, _next) => {
  // CI inject env variables during build time
  res.status(200).json({
    version: process.env.APP_VERSION ?? "unknown",
    commit: process.env.GIT_COMMIT ?? "unknown",
    buildTime: process.env.BUILD_TIME ?? "unknown",
  });
};

export default {
  getPing,
  getHealthCheck,
  getReadinessCheck,
  getInfo,
  getVersion,
};
