const express = require("express")
const router = express.Router()
const controller = require("../controllers/contactUser.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getContactUser)
router.post("/", auth, controller.addContactUser)
router.delete("/:id", auth, controller.deleteContactUser)
router.put("/:id", auth, controller.editContactUser)

module.exports = app => app.use("/contactUser", router)