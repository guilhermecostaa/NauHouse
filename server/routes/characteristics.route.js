const express = require("express")
const router = express.Router()
const controller = require("../controllers/characteristics.controller")

router.get("/", controller.getCharacteristics)
router.post("/", controller.addCharacteristic)
router.delete("/:id", controller.deleteCharacteristic)
router.put("/:id", controller.editCharacteristic)

module.exports = app => app.use("/characteristics", router)