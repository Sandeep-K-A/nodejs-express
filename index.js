require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const ApiError = require("./utils/ApiError");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

connectDB();

app.use(express.json());

app.use("/students", studentRoutes);

app.use((req, res, next) => {
  next(new ApiError(404, "Route not found"));
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
