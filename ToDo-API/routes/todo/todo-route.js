const express = require("express");
const router = express.Router();

const {
  createToDo,
  updateToDo,
  deleteToDo,
  finishToDo,
  findAllToDoByUserId,
} = require("../../controllers/toDo-controller");

router.put("/", updateToDo);
router.delete("/", deleteToDo);
router.post("/", createToDo);
router.put("/", finishToDo);
router.get("/", findAllToDoByUserId);

module.exports = router;
