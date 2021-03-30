const router = express.Router()
const controller = require("../controllers/propertyImages.controller")

router.get("/", controller.getPropertyImages)
router.post("/", controller.addPropertyImage)
router.delete("/:id", controller.deletePropertyImage)
router.put("/:id", controller.editPropertyImage)

module.exports = app => app.use("/porpertyImages", router)