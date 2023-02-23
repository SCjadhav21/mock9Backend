const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  user: Object,
  flight: Object,
});

const BookingModel = mongoose.model("booking", BookingSchema);

module.exports = { BookingModel };
