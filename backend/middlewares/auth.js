const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
      if (err) {
        return reject(err);
      }
      resolve(user);
    });
  });
};

const authentication = async (req, res, next) => {
  if (!req.headers?.authorization) {
    return res.status(400).send({ message: "Please provide a valid token" });
  }
  const bearerToken = req.headers.authorization;

  if (!bearerToken.startsWith("Bearer ")) {
    return res.status(400).send({ message: "Please provide a valid token" });
  }

  const token = bearerToken.split(" ");

  const user = await verifyToken(token[1]);

  req.user = user.user;
  next()
};


module.exports = authentication
