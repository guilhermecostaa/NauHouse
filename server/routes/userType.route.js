const express = require("express")
const router = express.Router()
const controller = require("../controllers/userType.controller")

router.get("/", controller.getUserType)
router.post("/", controller.addUserType)
router.delete("/:id", controller.deleteUserType)
router.put("/:id", controller.editUserType)

module.exports = app => app.use("/userType", router)