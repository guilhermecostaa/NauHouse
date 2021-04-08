const express = require("express")
const router = express.Router()
const controller = require("../controllers/user_events.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getUserEvents)
router.post("/", auth, controller.addUserEvent)
router.delete("/:id", auth, controller.deleteUserEvent)
router.put("/:id", auth, controller.editUserEvent)

module.exports = app => app.use("/userEvents", router)