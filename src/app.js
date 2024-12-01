const express = require("express");

const app = express();



app.get("/getUserData", (req, res) => {
  // Logic of DB call and get user data
  // try {
  throw new Error("slkjdfskdj");
  res.send("User Data Sent");
  // } catch (error) {
  //   res.status(500).send("Some Error contact support team");
  // }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
