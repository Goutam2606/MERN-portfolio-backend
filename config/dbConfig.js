const mongoose = require('mongoose');

// Encode special characters in your password, like @ becomes %40
const mongoURI = process.env.mongo_url || "mongodb+srv://goutamybca2022:G0ut%40my%40958764@cluster0.oed1r.mongodb.net/MERN_Portfolio";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', () => {
    console.log("Error connecting to database");
});

connection.on('connected', () => {
    console.log("Connected to MongoDB database Successfully");
    console.log(mongoURI);

});

module.exports = mongoose;
