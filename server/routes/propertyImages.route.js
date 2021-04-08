const express = require("express")
const router = express.Router()
const controller = require("../controllers/propertyImages.controller")

router.get("/", auth, controller.getPropertyImages)
router.post("/", auth, controller.addPropertyImage)
router.delete("/:id", auth, controller.deletePropertyImage)
router.put("/:id", auth, controller.editPropertyImage)

module.exports = app => app.use("/propertyImages", router)