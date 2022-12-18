const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created a Airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  create a Airport",
      err: { error },
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  delete the airport",
      err: { error },
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  get the airport",
      err: { error },
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airportService.updateAirport(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  update the airport",
      err: { error },
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await airportService.getAllAirport(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched a Airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  get the Airports",
      err: { error },
    });
  }
};

const createAirports = async (req, res) => {
  try {
    const cities = await airportService.createAirports(req.body);
    return res.status(201).json({
      data: cities,
      success: true,
      message: "Successfully created  Airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  create  Airports",
      err: { error },
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
  createAirports,
};
