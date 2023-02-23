const { connection } = require("./Config/db");
const express = require("express");
const app = express();
const { UserRoutes } = require("./Routes/user.route");
const { FlightRoutes } = require("./Routes/flight.route");
// const { DashboardRoutes } = require("./Routes/booking.route");
const { BookingRoutes } = require("./Routes/booking.route");
app.use(express.json());
app.use("/booking", BookingRoutes, (req, res) => {
  res.sendStatus(404);
});
// app.use("/dashboard", DashboardRoutes, (req, res) => {
//   res.sendStatus(404);
// });
app.use("/flights", FlightRoutes, (req, res) => {
  res.sendStatus(404);
});
app.use("/", UserRoutes, (req, res) => {
  res.sendStatus(404);
});

app.listen(4500, async (req, res) => {
  try {
    await connection;
    console.log("Connect to db");
  } catch (err) {
    console.log(err);
  }
});
