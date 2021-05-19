const express = require("express")
const router = express.Router()
const controller = require("../controllers/events.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getEvents)
router.get("/:id", auth, controller.getEventsByUserId)
router.post("/", auth, controller.addEvent)
router.delete("/:id", auth, controller.deleteEvent)
router.put("/:id", auth, controller.editEvent)

module.exports = app => app.use("/events", router)