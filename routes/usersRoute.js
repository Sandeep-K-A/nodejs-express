const express = require("express");
const { welcomeMessage, createUser } = require("../controllers/userController");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", upload.single("image"), createUser);

module.exports = router;
