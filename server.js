const express = require("express");
const path = require("path");
const router = express.Router();

const app = express();

app.use("/js", express.static(path.resolve(__dirname, "frontend", "js")));

app.use("/app/js", express.static(path.resolve(__dirname, "frontend", "js")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/app*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "app.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port " + port));
