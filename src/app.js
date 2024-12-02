const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  // Creating a new instance of the User model
  const user = new User(req.body);

  try {
    await user.save();

    res.send("User Added Successfully");
  } catch (error) {
    res.status(400).send("Error saving the user: " + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");

    app.listen(7777, () => {
      console.log("Server is successfully listening on port 3000...");
    });
  })
  .catch(() => {
    console.error("Database cannot be connected!!");
  });
