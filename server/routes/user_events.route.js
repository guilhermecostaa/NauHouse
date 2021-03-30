const express = require("express")
const router = express.Router()
const controller = require("../controllers/user_events.controller")

router.get("/", controller.getUserEvents)
router.post("/", controller.addUserEvent)
router.delete("/:id", controller.deleteUserEvent)
router.put("/:id", controller.editUserEvent)

module.exports = app => app.use("/userEvents", router)