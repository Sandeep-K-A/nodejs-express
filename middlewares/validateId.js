const mongoose = require("mongoose");

const validateId = (req, res, next) => {
  if (!req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid or missing student ID",
    });
  }
  next();
};

module.exports = validateId;
