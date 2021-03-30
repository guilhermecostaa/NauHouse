const express = require("express")
const router = express.Router()
const controller = require("../controllers/status.controller")

router.get("/", controller.getStatus)
router.post("/", controller.addStatus)
router.delete("/:id", controller.deleteStatus)
router.put("/:id", controller.editStatus)

module.exports = app => app.use("/status", router)