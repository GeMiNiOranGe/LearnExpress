import morgan from "morgan";

import { isDevEnv } from "@/utilities";

const httpLogger = isDevEnv() ? morgan("dev") : morgan("combined");

export default httpLogger;
