const express = require("express");

const { BookingModel } = require("../Model/booking.model");
const DashbourdRoutes = express.Router();
DashbourdRoutes.use(express.json());
module.exports = { DashbourdRoutes };
