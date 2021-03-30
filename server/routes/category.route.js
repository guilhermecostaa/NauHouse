const express = require("express")
const router = express.Router()
const controller = require("../controllers/category.controller")

router.get("/", controller.getCategories)
router.post("/", controller.addCategory)
router.delete("/:id", controller.deleteCategory)
router.put("/:id", controller.editCategory)

module.exports = app => app.use("/category", router)