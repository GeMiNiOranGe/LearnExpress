import express from "express";

import {
  errorRequestHandler,
  httpLogger,
  notFoundHandler,
} from "@/middlewares";
import { SystemInfoRouter, UserRouter } from "@/routes";

const app = express();

app.use(httpLogger);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(SystemInfoRouter);
app.use("/user", UserRouter);

// 404 handler
app.use(notFoundHandler);

// catch 404 and forward to error handler
app.use(errorRequestHandler);

export default app;
