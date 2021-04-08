const express = require("express")
const router = express.Router()
const controller = require("../controllers/sales.controller")

router.get("/", auth, controller.getSales)
router.post("/", auth, controller.addSale)
router.delete("/:id", auth, controller.deleteSale)
router.put("/:id", auth, controller.editSale)

module.exports = app => app.use("/sales", router)