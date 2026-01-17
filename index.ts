import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  process.stdout.write(`Server listening at http://localhost:${port}\n`);
});
