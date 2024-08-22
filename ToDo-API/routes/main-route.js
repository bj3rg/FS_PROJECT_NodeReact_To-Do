const express = require("express");
const router = express.Router();

const userRoute = require("./user/user-route");
const todoRoute = require("./todo/todo-route");
const premadeRoute = require("./premade/premade-route");

router.use("/user", userRoute);
router.use("/todo", todoRoute);
router.use("/premade", premadeRoute);

module.exports = router;
