const express = require("express");
const app = express();
app.use("/test", (req, res) => {
  res.send("hello from test");
});
app.use("/hello", (req, res) => {
  res.send("hello world");
});
app.listen(7777, () => {
  console.log("server is succesfuly  listening on port 7777....");
});
