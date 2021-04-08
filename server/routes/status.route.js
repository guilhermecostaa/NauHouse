const express = require("express")
const router = express.Router()
const controller = require("../controllers/status.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getStatus)
router.post("/", auth, controller.addStatus)
router.delete("/:id", auth, controller.deleteStatus)
router.put("/:id", auth, controller.editStatus)

module.exports = app => app.use("/status", router)