import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT ?? "3000",
  nodeEnv: process.env.NODE_ENV ?? "",
  gitCommit: process.env.GIT_COMMIT ?? "",
  buildTime: process.env.BUILD_TIME ?? "",
};

export default config;
