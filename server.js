const express = require('express');
const dbConfig = require('./config/dbConfig');
require('dotenv').config();
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
const port = process.env.PORT || 8000;

const portfolioRoutes = require('./routes/portfolioRoutes');
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.sendFile(__dirname, "client/build/index.html"));
    });
}
app.listen(port, () => {
    console.log(`Server is Running on localhost:${port}`);
});
