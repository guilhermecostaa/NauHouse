const express = require("express")
const router = express.Router()
const controller = require("../controllers/properties.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", controller.getProperties) 
router.get("/:id", controller.getPropertiesById)
router.get("/user/:id", auth, controller.getPropertiesByUser)
router.post("/", auth, controller.addProperty)
router.delete("/:id", auth, controller.deleteProperty)
router.put("/:id", auth, controller.editProperty)
router.put("/:id/status", auth, controller.editPropertyStatus)

module.exports = app => app.use("/property", router)