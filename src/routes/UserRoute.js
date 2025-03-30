const routes = require("express").Router()

const UserController = require("../controller/UserController")
// routes.post("/user",UserController.addRole)
routes.post("/users",UserController.signup)
routes.get("/users",UserController.getAllRoles)
routes.get("/users/:id",UserController.getRoleById)
routes.delete("/users/:id",UserController.deleteRole)
routes.post("/user/login",UserController.loginUser)
routes.post("/user/forgotpassword",UserController.forgotPassword)
routes.post("/user/resetpassword",UserController.resetpassword)

module.exports = routes