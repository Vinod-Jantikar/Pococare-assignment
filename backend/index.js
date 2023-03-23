const dotenv = require("dotenv");
const cors = require('cors')
const express = require("express");
const userController = require('./controller/user.controller')
const app = express();


dotenv.config();

app.use(express.json());
app.use(cors())

app.use('/user', userController)

module.exports = app;
