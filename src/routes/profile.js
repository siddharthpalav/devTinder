const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    // Handle any errors
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
      // return res.status(400).send();
    }
    const loggedInUser = req.user;

    // console.log("Before ===> ", loggedInUser);

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    // console.log("After ===> ", loggedInUser);

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfully!!`,
      data: loggedInUser,
    });
  } catch (err) {
    // Handle any errors
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;
