const express = require("express")
const router = express.Router()
const controller = require("../controllers/sales.controller")

router.get("/", controller.getSales)
router.post("/", controller.addSale)
router.delete("/:id", controller.deleteSale)
router.put("/:id", controller.editSale)

module.exports = app => app.use("/sales", router)