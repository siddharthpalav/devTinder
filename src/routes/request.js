const express = require("express");
const { userAuth } = require("../middlewares/auth");

const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  try {
    // Sending a connection request
    console.log("Sending a connection reqest");
    const user = req.user;
    res.send(user.firstName + " sent the connection request!");
  } catch (err) {
    // Handle any errors
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = requestRouter;
