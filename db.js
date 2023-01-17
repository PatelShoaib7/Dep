const mongoose = require("mongoose")
require('dotenv').config();
//const connection =  mongoose.connect(`mongodb+srv://12345:3zhqr%uVxS*qNWK@cluster0.g2n4bjn.mongodb.net/ZOMATO_USERS?retryWrites=true&w=majority`);
 const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = connection