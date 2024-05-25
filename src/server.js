const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/", function (req, res) {
  const pathToHTMLFile = path.resolve(__dirname, "../dist/index.html");
  const htmlContent = fs.readFileSync(pathToHTMLFile, "utf-8");
  console.log({ pathToHTMLFile });
  res.send(htmlContent);
});

app.listen(3000, function () {
  console.log("App running on port http://localhost:3000/");
});
