const express = require("express");
const router = express.Router();

const {
  createUser,
  updateUser,
  deleteUser,
  findUser,
} = require("../../controllers/user-controller");

router.post("/create", createUser);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);
router.get("/find", findUser);

module.exports = router;
