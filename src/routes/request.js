const express = require("express");
const { userAuth } = require("../middlewares/auth");
const User = require("./../models/user");
const ConnectionRequest = require("./../models/connectingRequest");
const requestRouter = express.Router();

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      const allowedStatus = ["ignored", "interested"];

      if (!allowedStatus.includes(status)) {
        return res
          .status(400)
          .json({ message: `Invalid status type: ${status}` });
      }

      const toUser = await User.findById(toUserId);
      if (!toUser) {
        return res.status(400).json({
          message: `User not found!`,
        });
      }

      // If there is an existing connection request
      const existingConnectionRequest = await ConnectionRequest.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      if (existingConnectionRequest) {
        return res.status(400).json({
          message: "Connection Request Already Exists!",
        });
      }

      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();

      res.json({
        message: req.user.firstName + " " + status + " in " + toUser.firstName,
        data,
      });
    } catch (err) {
      // Handle any errors
      res.status(400).send("ERROR : " + err.message);
    }
  }
);

module.exports = requestRouter;
