const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome!");
});

app.listen(3000, function () {
  console.log("App running on port http://localhost:3000/");
});
