export type ErrorResponse = {
  status: number;
  message: string;
};

export type HealthCheckResponse = {
  status: "ok";
  timestamp: string; // ISO-8601
  uptime: number; // seconds
};

export type ServiceInfoResponse = {
  name: string;
  version: string;
  author: string;
  license: string;
  homepage: string;
  environment: string;
  nodeVersion: string;
};

export type BuildInfoResponse = {
  version: string;
  commit: string;
  buildTime: string;
};

export type GetUsersResponse = string;

export type GetUserByIdResponse = string;
