require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("WorkSphere HRMS API Running");
});

module.exports = app;