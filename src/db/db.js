const mongoose = require('mongoose');


async function connectDB() {

    // connect server to database
    // connected to cluster by the connection string url, and add to connect to database after.net/
    // halley is the name of database if it doesn't exists it creates a new one and connects it.
    await mongoose.connect("mongodb+srv://yt:HDlkecm9QeJBjmyB@yt-backend.4npayom.mongodb.net/halley")

    console.log("Connected to DB");
    
}

module.exports = connectDB