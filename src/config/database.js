const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sidnamastenode:sid%40123@namastenode.be9es.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
