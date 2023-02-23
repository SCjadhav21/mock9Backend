const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, "suraj", async (err, decoded) => {
    if (err) {
      res.send({ massage: err.message, alert: "you are not logged in" });
    } else {
      req.body.userId = decoded.userId;
      next();
    }
  });
};

module.exports = { Auth };
