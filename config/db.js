const mongoose=require("mongoose")
require('dotenv').config()

const connection=mongoose.connect("mongodb+srv://sanjayv:sanjay@cluster0.9ycsbw8.mongodb.net/nxm201cwp?retryWrites=true&w=majority");


module.exports={connection}
