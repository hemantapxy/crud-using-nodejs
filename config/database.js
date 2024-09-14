const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB ka connection is successful"))
    .catch((error)=>{
         console.log("issue in DB connection");
         console.error(error.message);
         //iska matlab kya he
         process.exit(1);
    } );
}

module.exports = dbconnect;