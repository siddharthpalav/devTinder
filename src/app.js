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
    await User.save();

    res.send("User Added Successfully");
  } catch (error) {
    res.status(400).send("Error saving the user: " + error.message);
  }
});

// Get user by email
app.post("/user", async (req, res) => {
  try {
    // Create a new instance of the User model with the request body
    const user = new User(req.body);

    // Save the instance to the database
    const userData = await user.save();

    // Send the saved user data as the response
    res.status(201).send(userData);
  } catch (error) {
    // Handle any errors
    console.error("Error saving user:", error);
    res.status(500).send({ error: error.message });
  }
});

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

// Delete a user from the database
app.delete("/user", async (req, res) => {
  try {
    const userId = req.body.userId;

    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

// Update data of the user
app.patch("/user/:userId", async (req, res) => {
  try {
    const userId = req.params?.userId;
    const data = req.body;

    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    if (data?.skills.length > 10) {
      throw new Error("Skills cannot be more than 10");
    }

    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (error) {
    res.status(400).send("UPDATE FAILED: " + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");

    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch(() => {
    console.error("Database cannot be connected!!");
  });
