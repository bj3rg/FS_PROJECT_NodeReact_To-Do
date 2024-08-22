const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");

const {
  createPremade,
  updatePremade,
  deleteAllPremade,
  deletePremadeById,
  findAllPremade,
} = require("../../controllers/premade-controller");

router.post("/create", [body("item").notEmpty()], createPremade);
router.put("/update/:id", [param("id").notEmpty().isUUID()], updatePremade);
router.delete("/delete/:id", [param("id").isUUID()], deletePremadeById);
router.get("/find-all", findAllPremade);
router.delete("/delete-all", deleteAllPremade);

module.exports = router;
