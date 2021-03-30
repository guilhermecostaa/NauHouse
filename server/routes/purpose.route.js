const express = require("express")
const router = express.Router()
const controller = require("../controllers/purpose.controller")

router.get("/", controller.getPurposes)
router.post("/", controller.addPurpose)
router.delete("/:id", controller.deletePurpose)
router.put("/:id", controller.editPurpose)

module.exports = app => app.use("/purpose", router)