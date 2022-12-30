const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");
const { FlightMiddleware } = require("../../middleware/index");

const router = express.Router();

// City Routes

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city", CityController.getAll);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.post("/cities", CityController.createCities);
router.get("/get-airport-by-cityId/:id", CityController.findAirportsByCityId);

// Airport Routes

router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport", AirportController.getAll);
router.get("/airport/:id", AirportController.get);
router.patch("/airport/:id", AirportController.update);
router.post("/airports", AirportController.createAirports);

// Flight routes
router.post(
  "/flights",
  FlightMiddleware.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.patch("/flights/:id", FlightController.update);

module.exports = router;
