let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");
let uploadFile = require("../middleware/uploads");

router.get("/", (req, res) => {
  Controllers.vehicleController.getVehicles(res);
});

router.get("/:id", (req, res) => {
  Controllers.vehicleController.getVehicle(req, res);
});

router.post("/create", uploadFile, (req, res) => {
  Controllers.vehicleController.createVehicle(req, res);
});

router.put("/:id", (req, res) => {
  Controllers.vehicleController.updateVehicle(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.vehicleController.deleteVehicle(req, res);
});

module.exports = router;
