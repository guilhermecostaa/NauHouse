const express = require("express")
const router = express.Router()
const controller = require("../controllers/contacts.controller")

router.get("/", controller.getContacts)
router.post("/", controller.addContact)
router.delete("/:id", controller.deleteContact)
router.put("/:id", controller.editContact)

module.exports = app => app.use("/contacts", router)