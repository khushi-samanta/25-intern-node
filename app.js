
const express = require ("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const cors = require("cors");
app.use(cors());

const roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)

const UserRoute = require("./src/routes/UserRoute")
app.use(UserRoute)

const stateRoute = require("./src/routes/StateRoutes")
app.use("/state",stateRoute)


const CityRoute = require("./src/routes/CityRoutes")
app.use("/city",CityRoute)

const AreaRoute= require("./src/routes/AreaRoutes")
app.use("/area",AreaRoute)

const HordingRoutes= require("./src/routes/HordingRoutes")
app.use("/hording",HordingRoutes)

const BookingRoutes=require("./src/routes/BookingRoutes")
app.use("/booking",BookingRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/25_internship_node").then(()=>{
    console.log("database connected...")
})

const PORT =3000
app.listen(PORT,()=>{
    console.log("server started on number",PORT)
})