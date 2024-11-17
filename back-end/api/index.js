const express = require('express');
const cors = require('cors');
require('../config/dotenv');
const additionRoute = require('./addition');
const inventoryRoute = require('./inventory');
const usersRoute = require('./users');

const app = express();
const port = process.env.PORT || 3001;

const allowedOrigins = ['http://localhost:3000', 'https://reactpilot.vercel.app'];
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use('/addition', additionRoute);
app.use('/inventory', inventoryRoute);
app.use('/users', usersRoute);

app.get("/env", (req, res) => {
    res.json({
        MONGODB_URI: process.env.MONGODB_URI,
        PORT: process.env.PORT
    })
});

app.listen(port);

module.exports = app;