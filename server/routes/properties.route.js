const express = require("express")
const router = express.Router()
const controller = require("../controllers/properties.controller")

router.get("/", controller.getProperties)
router.post("/", controller.addProperty)
router.delete("/:id", controller.deleteProperty)
router.put("/:id", controller.editProperty)

module.exports = app => app.use("/property", router)