const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const auth = require("../middlewares/auth");

const newToken = (user) => {
  return jwt.sign({ user }, "jfjhsfuhefiucndkjsc");
};

// Register
router.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    if (!email && !password && !fname && !lname) {
      return res.status(400).send({ message: "All fields are mandatory" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).send({ message: "User Already Exist" });
    }

    await User.create(req.body);
    return res.status(200).send({ message: "User Successfully Registered" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.status(400).send("All inputs are mandatory");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new error("User not found");
    }

    const match = user.checkPassword(req.body.password);

    if (!match) {
      throw new error("Either Email or Password are incorrect");
    }

    const token = newToken(user);

    return res.status(200).send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/profile", auth, async (req, res) => {
  try {
    const { email } = req.user;

    const user = await User.findOne({ email });

    return res.status(200).send(user);
  } catch (error) {
    res.status(401).send(error);
  }
});

module.exports = router;
