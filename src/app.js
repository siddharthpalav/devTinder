const express = require("express");

const app = express();

app.use(
  "/user",
  [
    (req, res, next) => {
      console.log("response1");
      next();
      // res.send("Response1");
    },
    (req, res, next) => {
      console.log("response2");
      next();
      // res.send("Response2");
    },
  ],
  (req, res, next) => {
    console.log("response3");
    next();
    // res.send("Response3");
  },
  (req, res, next) => {
    console.log("response4");
    res.send("Response4");
    // next();
  }
);

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
