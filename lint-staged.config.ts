import { type Configuration } from "lint-staged";

const config: Configuration = {
  "*": "prettier --write --ignore-unknown",
};

export default config;
