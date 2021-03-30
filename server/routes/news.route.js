const express = require("express")
const router = express.Router()
const controller = require("../controllers/news.controller")

router.get("/", controller.getNews)
router.post("/", controller.addNew)
router.delete("/:id", controller.deleteNew)
router.put("/:id", controller.editNew)

module.exports = app => app.use("/news", router)