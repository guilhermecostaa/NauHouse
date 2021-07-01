const express = require("express")
const router = express.Router()
const controller = require("../controllers/sales.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getSales)
router.get("/:id", auth, controller.getUserSalesById)
router.post("/", auth, controller.addSale)
router.delete("/:id", auth, controller.deleteSale)
router.get("/transfer/:id", auth, controller.getTransfer)
router.put("/:id", auth, controller.editSale)

module.exports = app => app.use("/sales", router)