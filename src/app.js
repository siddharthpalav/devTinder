const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//   res.send("Hello from the dashboard!");
// });

app.get("/user/:userId/name/:password", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send({
    firstName: "Sid",
    lastName: "Palav",
  });
});

app.post("/user", (req, res) => {
  // saving data to DB
  res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
});

//
app.use("/hello", (req, res) => {
  res.send("Hello hello hello!");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
