const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

// Generate openapi
const expressOasGenerator = require("express-oas-generator");
expressOasGenerator.init(app, {});

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
    hostname: os.hostname(),
    processId: process.pid,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
