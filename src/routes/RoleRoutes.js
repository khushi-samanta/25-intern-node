const routes = require("express").Router()
const roleController= require("../controller/RoleController")
routes.get("/roles",roleController.getAllRoles)
routes.post("/role",roleController.addRole)
routes.delete("/roles/:id",roleController.deleteRole)
routes.get("/role/:id",roleController.getRoleById)

module.exports = routes