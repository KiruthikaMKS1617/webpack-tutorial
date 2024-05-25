const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/static", express.static(path.resolve(__dirname, "../dist")));
app.get("/hello-world", function (req, res) {
  const pathToHTMLFile = path.resolve(__dirname, "../dist/hello-world.html");
  const htmlContent = fs.readFileSync(pathToHTMLFile, "utf-8");
  res.send(htmlContent);
});
app.get("/kiwi", function (req, res) {
  const pathToHTMLFile = path.resolve(__dirname, "../dist/kiwi.html");
  const htmlContent = fs.readFileSync(pathToHTMLFile, "utf-8");
  console.log({ pathToHTMLFile });
  res.send(htmlContent);
});

app.listen(3000, function () {
  console.log("App running on port http://localhost:3000/");
});
