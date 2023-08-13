const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// let uploadFile = require("../middleware/uploads");
const upload = multer({ storage });

router.get("/", (req, res) => {
  Controllers.vehicleController.getVehicles(res);
});

router.get("/:id", (req, res) => {
  Controllers.vehicleController.getVehicle(req, res);
});

router.post("/create", upload.single("file"), (req, res) => {
  Controllers.vehicleController.createVehicle(req, res);
});

router.put("/:id", (req, res) => {
  Controllers.vehicleController.updateVehicle(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.vehicleController.deleteVehicle(req, res);
});

module.exports = router;
