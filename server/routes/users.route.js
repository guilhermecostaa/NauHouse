const express = require("express")
const router = express.Router()
const controller = require("../controllers/users.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", controller.getUsers)
router.post("/", controller.addUser)
router.delete("/:id", auth, controller.deleteUser)
router.put("/:id", auth, controller.editUser)

module.exports = app => app.use("/users", router)