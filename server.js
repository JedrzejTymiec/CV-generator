const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const fs = require("fs");

const app = express();

app.use("/js", express.static(path.resolve(__dirname, "frontend", "js")));
app.use("/css", express.static(path.resolve(__dirname, "frontend", "css")));
app.use(
  "/pictures",
  express.static(path.resolve(__dirname, "frontend", "pictures"))
);

app.use("/app/js", express.static(path.resolve(__dirname, "frontend", "js")));
app.use("/app/css", express.static(path.resolve(__dirname, "frontend", "css")));
app.use(
  "/app/pictures",
  express.static(path.resolve(__dirname, "frontend", "pictures"))
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/app*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "app.html"));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

app.post("/upload", (req, res) => {
  let fileName = req.files.file.name;
  let path = __dirname + "/pictures/" + fileName;
  req.files.file.mv(path);
  //  (err) => {
  //   console.error(err);
  //   res.writeHead(500, {
  //     "Content-Type": "application/json",
  //   });
  //   res.end(JSON.stringify({ status: "error", message: err }));
  // });

  // res.writeHead(200, {
  //   "Content-Type": "application/json",
  // });
  res.send(JSON.stringify({ status: "success", path: path }));
});

app.delete("/delete", (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  let path = __dirname + "/pictures/" + name;

  fs.unlink(path, (err) => {
    if (err) {
      console.log(err);
    }
  });

  res.send(req.body);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port " + port));
