const routes = require ('express').Router();
const CityController = require('../controller/CityController');
routes.post("/addcity",CityController.addCity);
routes.get("/getallcities",CityController.getallCities);
routes.delete("/deleteCity/:id",CityController.deleteCity);
routes.get("/getcitybystate/:stateId",CityController.getCityByStateId);
module.exports = routes;