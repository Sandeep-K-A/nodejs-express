require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server running success...",
  });
});

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}...`);
});
