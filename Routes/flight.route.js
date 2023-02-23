const express = require("express");

const { FlightModel } = require("../Model/flight.model");

const FlightRoutes = express.Router();
FlightRoutes.use(express.json());

FlightRoutes.get("/", async (req, res) => {
  console.log(req.body);

  try {
    const flights = await FlightModel.find();
    res.send(flights);
  } catch (err) {
    res.send("Something went wrong");
  }
});

FlightRoutes.get("/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const flight = await FlightModel.findOne({ _id: id });
    res.send(flight);
  } catch (err) {
    res.send("Something went wrong");
  }
});

FlightRoutes.delete("/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const flight = await FlightModel.findOneAndDelete({ _id: id });
    res.send(`flight data with id:${id} is deleted`);
  } catch (err) {
    res.send("Something went wrong");
  }
});

FlightRoutes.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await FlightModel.findOneAndUpdate({ _id: id }, { ...payload });

    res.send(`flight data with id:${id} is updated`);
  } catch (err) {
    res.send("Something went wrong");
  }
});

FlightRoutes.post("/", async (req, res) => {
  const {
    airline,
    flightNo,
    departure,
    arrival,
    departureTime,
    arrivalTime,
    seats,
    price,
  } = req.body;
  try {
    const flight = new FlightModel({
      airline,
      flightNo,
      departure,
      arrival,
      departureTime,
      arrivalTime,
      seats,
      price,
    });
    await flight.save();
    res.send("Flight added succesfully Successfully");
  } catch (err) {
    res.send(err);
  }
});

module.exports = { FlightRoutes };
