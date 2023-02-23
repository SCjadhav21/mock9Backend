const express = require("express");

const { UserModel } = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const UserRoutes = express.Router();
UserRoutes.use(express.json());

UserRoutes.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      res.send("email is already registered");
    } else {
      const user = new UserModel({ name, email, password });
      await user.save();
      res.send("Registered Successfully");
    }
  } catch (err) {
    res.send(err);
  }
});

UserRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email, password });

    if (user) {
      const token = jwt.sign({ userId: user._id }, "suraj");

      res.send({ msg: "Login Successfull", token: token });
    } else {
      res.send("Wrong Credntials");
    }
  } catch (err) {
    res.send("Something went wrong");
    console.log(err);
  }
});

module.exports = { UserRoutes };
