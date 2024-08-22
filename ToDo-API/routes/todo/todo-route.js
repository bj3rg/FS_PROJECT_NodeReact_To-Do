const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const {
  createToDo,
  updateToDo,
  deleteToDo,
  finishToDo,
  findAllToDoByUserId,
} = require("../../controllers/toDo-controller");

router.post(
  "/create/:id",
  [body("item").notEmpty(), param("id").notEmpty().isUUID()],
  createToDo
);
router.put(
  "/update/:id",
  [body("newItem").notEmpty(), param("id").notEmpty().isUUID()],
  updateToDo
);
router.put("/finish/:id", [param("id").notEmpty().isUUID()], finishToDo);
router.delete("/delete/:id", [param("id").notEmpty().isUUID()], deleteToDo);
router.get(
  "/find-all/:user_id",
  [param("user_id").notEmpty().isUUID()],
  findAllToDoByUserId
);

module.exports = router;
