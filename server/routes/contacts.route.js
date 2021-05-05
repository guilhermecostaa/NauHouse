const express = require("express")
const router = express.Router()
const controller = require("../controllers/contacts.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth ,controller.getContacts)
router.get("/:id", auth, controller.getContactsByUserID)
router.post("/", auth, controller.addContact)
router.delete("/:id", auth, controller.deleteContact)
router.put("/:id", auth, controller.editContact)

module.exports = app => app.use("/contacts", router)