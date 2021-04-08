const express = require("express")
const router = express.Router()
const controller = require("../controllers/events.controller")

router.get("/", auth, controller.getEvents)
router.post("/", auth, controller.addEvent)
router.delete("/:id", auth, controller.deleteEvent)
router.put("/:id", auth, controller.editEvent)

module.exports = app => app.use("/events", router)