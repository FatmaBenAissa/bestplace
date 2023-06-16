const mongoose = require("mongoose");


const dbConnect = async() => {
    try {
        let result = await mongoose.connect(process.env.DB_URI);
        console.log("database is connect");
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnect;
