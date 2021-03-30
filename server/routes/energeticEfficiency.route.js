const express = require("express")
const router = express.Router()
const controller = require("../controllers/energeticEfficiency.controller")

router.get("/", controller.getEnergeticEfficiency)
router.post("/", controller.addEnergeticEfficiency)
router.delete("/:id", controller.deleteEnergeticEfficiency)
router.put("/:id", controller.editEnergeticEfficiency)

module.exports = app => app.use("/energeticEfficiency", router)