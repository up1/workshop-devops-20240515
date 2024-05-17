const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 3000;

// Generate openapi
const expressOasGenerator = require("express-oas-generator");
expressOasGenerator.init(app, {});

app.get("/", (req, res) => {
  res.json({
    message: "Hello World day 2/3",
    hostname: os.hostname(),
    processId: process.pid,
  });
});


app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});

process.on('SIGINT', () => {
  debug('SIGTERM signal received: closing HTTP server')
  app.close(() => {
    debug('HTTP server closed')
  })
})
