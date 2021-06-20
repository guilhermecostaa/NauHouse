const express = require("express")
const router = express.Router()
const controller = require("../controllers/characteristicsProperty.controller")

router.get("/:id", controller.getCharacteristicsProperty)
router.post("/", controller.addCharacteristicProperty)
router.delete("/:id", controller.deleteCharacteristicProperty)
router.put("/:id", controller.editCharacteristicProperty)

module.exports = app => app.use("/characteristicsProperty", router)