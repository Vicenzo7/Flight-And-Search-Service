const { AirportRepository } = require("../repository/index");
const CrudService = require("./crud-service");
class AirportService extends CrudService {
  constructor() {
    const airportRepository = new AirportRepository();
    super(airportRepository);
    this.airportRepository = airportRepository;
  }

  async getAll(filter) {
    try {
      const airports = await this.airportRepository.getAll({
        name: filter.name,
      });
      return airports;
    } catch (error) {
      console.log("Something went wrong in the Airport service layer");
      throw { error };
    }
  }

  async createAirports(data) {
    try {
      const airports = await this.airportRepository.createAirports(data);
      return airports;
    } catch (error) {
      console.log("Something went wrong in the Airport service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
