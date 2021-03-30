const express = require("express")
const router = express.Router()
const controller = require("../controllers/events.controller")

router.get("/", controller.getEvents)
router.post("/", controller.addEvent)
router.delete("/:id", controller.deleteEvent)
router.put("/:id", controller.editEvent)

module.exports = app => app.use("/events", router)