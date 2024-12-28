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

requestRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  async (req, res) => {
    try {
      const loggedInUser = req.user;
      const { status, requestId } = req.params;

      // Validate the status
      const allowedStatus = ["accepted", "rejected"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({
          message: "Status not allowed!",
        });
      }

      const connectionRequest = await ConnectionRequest.findOne({
        fromUserId: requestId,
        toUserId: loggedInUser.id,
        status: "interested",
      });

      if (!connectionRequest) {
        return res.status(404).json({
          message: "Conneciton request not found",
        });
      }

      connectionRequest.status = status;

      const data = await connectionRequest.save();

      res.status(200).json({
        message: `Connection request ${status}`,
        data,
      });

      // Akshay => Elon
      // loggedInId === toUserId
      // status = interested
      // requestId should be valid
    } catch (error) {
      // Handle any errors
      res.status(400).send("ERROR : " + error.message);
    }
  }
);

module.exports = requestRouter;
