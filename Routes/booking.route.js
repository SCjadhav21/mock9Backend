const express = require("express");

const { BookingModel } = require("../Model/booking.model");
const BookingRoutes = express.Router();
BookingRoutes.use(express.json());
module.exports = { BookingRoutes };
