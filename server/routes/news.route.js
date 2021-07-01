const express = require("express")
const router = express.Router()
const controller = require("../controllers/news.controller")
const auth = require("../middleware/auth.middleware")
const multer = require("multer")

const upload = multer({
    dest: '../upload/'
})

router.get("/", controller.getNews)
router.get("/:id", controller.getNewById)
router.post("/", upload.single("file"), controller.addNew)
router.delete("/:id", auth, controller.deleteNew)
router.put("/:id", auth, controller.editNew)

module.exports = app => app.use("/news", router)