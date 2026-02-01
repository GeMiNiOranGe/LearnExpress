import type { RequestHandler } from "express";

import config from "@/config";
import pkg from "package.json";
import type {
  BuildInfoResponse,
  HealthCheckResponse,
  ServiceInfoResponse,
} from "@/types";

/**
 * Liveness probe endpoint.
 *
 * Purpose:
 * - Verifies that the Node.js process is running
 * - Used by load balancers, uptime monitors, or orchestration platforms
 *
 * Characteristics:
 * - No request body
 * - No side effects
 * - Always returns HTTP 200 if the process is alive
 */
const handlePing: RequestHandler = (req, res, _next) => {
  res.sendStatus(200);
};

/**
 * Health check endpoint.
 *
 * Purpose:
 * - Indicates the overall health of the service
 * - Can be extended in the future to check dependencies
 *   (database, cache, external APIs, etc.)
 *
 * Response:
 * - JSON payload with basic runtime information
 */
const handleHealthCheck: RequestHandler<"", HealthCheckResponse> = (
  req,
  res,
  _next,
) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};

/**
 * Readiness probe endpoint.
 *
 * Purpose:
 * - Indicates whether the service is ready to receive traffic
 * - Commonly used by Kubernetes readiness probes
 *
 * Notes:
 * - Logic may differ from the health check
 * - Should return HTTP 503 if the service is not ready
 */
const handleReadinessCheck: RequestHandler = (req, res, _next) => {
  // TODO: implement real readiness checks (DB, cache, etc.)
  const ready = true;

  if (!ready) {
    res.sendStatus(503);
    return;
  }

  res.sendStatus(200);
};

/**
 * Service metadata endpoint.
 *
 * Purpose:
 * - Exposes static and runtime information about the service
 * - Useful for debugging and operational visibility
 */
const handleServiceInfo: RequestHandler<"", ServiceInfoResponse> = (
  req,
  res,
  _next,
) => {
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

/**
 * Build information endpoint.
 *
 * Purpose:
 * - Exposes build-time metadata injected by CI/CD pipelines
 * - Helps identify the exact version running in production
 *
 * Notes:
 * - Environment variables are expected to be injected at build time
 */
const handleBuildInfo: RequestHandler<"", BuildInfoResponse> = (
  req,
  res,
  _next,
) => {
  // CI inject env variables during build time
  res.status(200).json({
    version: pkg.version,
    commit: config.gitCommit,
    buildTime: config.buildTime,
  });
};

export default {
  handlePing,
  handleHealthCheck,
  handleReadinessCheck,
  handleServiceInfo,
  handleBuildInfo,
};
