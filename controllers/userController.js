const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { name } = req.body;

    const user = await User.create({
      name: name,
      image: req.file.filename,
    });
    res.status(200).json({
      success: true,
      data: user,
      message: "user created",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const welcomeMessage = (req, res) => {
  res.status(200).json({
    success: true,
    message: "welcome user",
  });
};

module.exports = { welcomeMessage, createUser };
