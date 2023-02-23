const express = require("express");

const { BookingModel } = require("../Model/booking.model");
const BookingRoutes = express.Router();
const { Auth } = require("../Middelware/auth");
BookingRoutes.use(express.json());
BookingRoutes.post("/", Auth, async (req, res) => {
  const userId = req.body.userId;
  const flightId = req.body.flightId;
  try {
    const new_booking = new BookingModel({
      user: { type: userId, ref: "User" },
      flight: { type: flightId, ref: "Flight" },
    });
    await new_booking.save();
    res.send({
      user: { type: userId, ref: "User" },
      flight: { type: flightId, ref: "Flight" },
    });
  } catch (error) {
    res.send("somthing went wrong");
  }
});
module.exports = { BookingRoutes };
