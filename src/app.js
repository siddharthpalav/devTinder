const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/user/login", userAuth, (req, res) => {
  res.send("User logged in successfully!");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
  // Logic of checking if the request is authorize
  res.status(200).send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  // Logic of checking if the request is authorize
  res.status(200).send("Deleted a user");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
