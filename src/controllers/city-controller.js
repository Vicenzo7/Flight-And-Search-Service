const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  create a city",
      err: { error },
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  delete the city",
      err: { error },
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  get the city",
      err: { error },
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  update the city",
      err: { error },
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched a cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  get the cities",
      err: { error },
    });
  }
};

const createCities = async (req, res) => {
  try {
    const cities = await cityService.createCities(req.body);
    return res.status(201).json({
      data: cities,
      success: true,
      message: "Successfully created Cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  create Cities",
      err: { error },
    });
  }
};

const findAirportsByCityId = async (req, res) => {
  try {
    const response = await cityService.findAirportsByCityId(req.params.id);
    if (response.length > 0) {
      return res.status(200).json({
        data: response,
        success: true,
        message: "Successfully fetched a airport",
        err: {},
      });
    } else {
      return res.status(200).json({
        data: [],
        success: true,
        message: "No airport for this city",
        err: {},
      });
    }
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

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
  createCities,
  findAirportsByCityId,
};
