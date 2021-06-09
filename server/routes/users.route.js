const express = require("express")
const router = express.Router()
const controller = require("../controllers/users.controller")
const auth = require("../middleware/auth.middleware")
const multer = require("multer")

const upload = multer({
    dest: '../upload/'
})

router.get("/", controller.getUsers)
router.get("/:id", controller.getUserById)
router.post("/", upload.single("file"), controller.addUser)
router.delete("/:id", auth, controller.deleteUser)
router.put("/:id", auth, controller.editUser)

module.exports = app => app.use("/users", router)