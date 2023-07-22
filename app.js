const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const authRouter = require("./routes/auth");
const noticesRouter = require("./routes/notices");
const { authenticate } = require("./middlewares");
require("dotenv").config();

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/notices", noticesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
