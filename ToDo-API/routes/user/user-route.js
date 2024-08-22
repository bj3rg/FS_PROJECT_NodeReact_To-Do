const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");

const {
  createUser,
  updateUser,
  deleteUser,
  findUser,
} = require("../../controllers/user-controller");

router.post("/create", [body("name").notEmpty()], createUser);
router.put(
  "/update/:id",
  [param("id").notEmpty(), body("newName").notEmpty()],
  updateUser
);
router.delete("/delete/:id", [param("id").notEmpty()], deleteUser);
router.get("/find/:id", [param("id").notEmpty()], findUser);

module.exports = router;
