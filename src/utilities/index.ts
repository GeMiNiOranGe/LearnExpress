import config from "@/config";

export function isDevEnv(): boolean {
  return config.nodeEnv === "development";
}
