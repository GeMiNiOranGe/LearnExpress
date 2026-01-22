import express from "express";
import config from "@/config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(config.port, () => {
  process.stdout.write(`Server listening at http://localhost:${config.port}\n`);
});
