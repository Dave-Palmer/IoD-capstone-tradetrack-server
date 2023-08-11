"use strict";
let Models = require("../models");

const getVehicles = (res) => {
  Models.Vehicle.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getVehicle = (req, res) => {
  const { id } = req.params;
  Models.Vehicle.find({ _id: id })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createVehicle = (req, res) => {
  const { filename } = req.file; // extract the file name seperately in order to save the path in the database
  const { assignedTo, make, model, plate, odo, wof, rego, rucs } = req.body;
  const newVehicle = {
    assignedTo: assignedTo,
    make: make,
    model: model,
    plate: plate,
    odo: odo,
    wof: wof,
    rego: rego,
    rucs: rucs,
    photo: process.env.IMG_PATH + filename,
  };
  new Models.Vehicle(newVehicle)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateVehicle = (req, res) => {
  Models.Vehicle.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteVehicle = (req, res) => {
  console.log(req.params.id);
  Models.Vehicle.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  createVehicle,
  deleteVehicle,
  getVehicles,
  getVehicle,
  updateVehicle,
};
