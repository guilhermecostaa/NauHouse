const express = require("express")
const router = express.Router()
const controller = require("../controllers/news.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", controller.getNews)
router.get("/:id", controller.getNewById)
router.post("/", auth, controller.addNew)
router.delete("/:id", auth, controller.deleteNew)
router.put("/:id", auth, controller.editNew)

module.exports = app => app.use("/news", router)