const express = require("express")
const router = express.Router()
const controller = require("../controllers/contactUser.controller")

router.get("/", controller.getContactUser)
router.post("/", controller.addContactUser)
router.delete("/:id", controller.deleteContactUser)
router.put("/:id", controller.editContactUser)

module.exports = app => app.use("/contactUser", router)