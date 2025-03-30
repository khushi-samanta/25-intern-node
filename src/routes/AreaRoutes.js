const routes = require ('express').Router();
const AreaController = require('../controller/AreaController');
routes.post("/addarea",AreaController.addArea);
routes.get("/getallareas",AreaController.getallAreas);
routes.delete("/deletearea/:id",AreaController.deleteArea);
routes.get("/getareabycity/:cityId",AreaController.getAreaBycityId);
module.exports = routes;