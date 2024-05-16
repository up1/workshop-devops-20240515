const express = require("express");
const os = require("os");
const db = require("./db");
db.connect();

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

app.get("/users", async (req, res) => {
  db.getUsers()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error getting users" });
    });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
