const express = require("express")
const router = express.Router()
const controller = require("../controllers/images.controller")

router.get("/", controller.getImages)
router.post("/", controller.addImage)
router.delete("/:id", controller.deleteImage)
router.put("/:id", controller.editImage)

module.exports = app => app.use("/images", router)