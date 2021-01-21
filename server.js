const express = require("express");
const path = require("path");
const router = express.Router();

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.use(
  "/app/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/app*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "app.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port " + port));
