const express = require("express")
const router = express.Router()
const controller = require("../controllers/shape.controller")

router.get("/", controller.getShapes)
router.post("/", controller.addShape)
router.delete("/:id", controller.deleteShape)
router.put("/:id", controller.editShape)

module.exports = app => app.use("/shape", router)