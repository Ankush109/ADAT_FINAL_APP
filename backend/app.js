const express= require("express")
const cookie =require("cookie-parser")
const bodyparser = require("body-parser")
const fileupload =require("express-fileupload")
const dotenv =require("dotenv")
const path = require("path")

const app =express()
const errormiddleware = require("./middelware/error")
dotenv.config({path:"backend/config/config.env"})
app.use(express.json())
app.use(cookie())
app.use(bodyparser.urlencoded({extended:true}))
app.use(fileupload())
//route imports
const product =require("./routes/productrouter")
const user = require("./routes/userroutes")
const order =require("./routes/orderroute")
const payment = require("./routes/paymentroute")
app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use("/api/v1",payment)
app.use(express.static(path.join(__dirname,"../frontend/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})
// middelware for error
app.use(errormiddleware)
module.exports = app 