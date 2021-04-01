const express = require("express")
const router = express.Router()
const controller = require("../controllers/group.controller")

router.get("/", controller.getGroups)
router.post("/", controller.addGroup)
router.delete("/:id", controller.deleteGroup)
router.put("/:id", controller.editGroup)

module.exports = app => app.use("/group", router)