const express = require("express")
const router = express.Router()
const controller = require("../controllers/news.controller")

router.get("/", auth ,controller.getNews)
router.post("/", auth, controller.addNew)
router.delete("/:id", auth, controller.deleteNew)
router.put("/:id", auth, controller.editNew)

module.exports = app => app.use("/news", router)