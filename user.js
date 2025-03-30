console.log("user file loaded..")
var userName = "Ram"
var userAge = 23
 const printUserData = (a)=> {
    console.log("print user data functiion called from user.js file....",a)
 }
module.exports = {
    userName,userAge,printUserData
} 