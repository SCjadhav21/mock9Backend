const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://suraj:suraj@cluster0.7pybq.mongodb.net/airtickets?retryWrites=true&w=majority"
);
module.exports = { connection };
