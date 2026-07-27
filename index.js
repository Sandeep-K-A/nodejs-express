require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const usersRoute = require("./routes/usersRoute");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/users", usersRoute);

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
