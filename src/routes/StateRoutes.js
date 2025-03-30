const routes = require ('express').Router();
const stateController = require('../controller/StateController');
routes.post("/addstate",stateController.addState);
routes.get("/getallstates",stateController.getallState);
// routes.get("/getallstates",stateController.getallState);
routes.delete("/deleteState/:id",stateController.deleteState);
module.exports = routes;