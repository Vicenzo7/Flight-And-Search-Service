const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/index");
class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }

  async update(airportId, data) {
    try {
      const airport = await Airport.findByPk(airportId);

      if (data.name != null) {
        airport.name = data.name;
      }

      if (data.cityId != null) {
        airport.cityId = data.cityId;
      }

      airport.address = data.address;

      await airport.save();
      return airport;
    } catch (error) {
      console.log("Something went wrong in the Airport repository layer");
      throw { error };
    }
  }

  async getAll(filter) {
    // filter can even be empty
    try {
      if (filter.name) {
        const airports = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return airports;
      }

      const airports = await Airport.findAll();
      return airports;
    } catch (error) {
      console.log("Something went wrong in the Airport repository layer");
      throw { error };
    }
  }

  async createAirports(data) {
    try {
      const airports = await Airport.bulkCreate(data);
      return airports;
    } catch (error) {
      console.log("Something went wrong in the Airport repository layer");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
