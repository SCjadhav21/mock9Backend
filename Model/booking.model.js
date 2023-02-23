const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  flight: { type: ObjectId, ref: "Flight" },
});

const BookingModel = mongoose.model("booking", BookingSchema);

module.exports = { BookingModel };
