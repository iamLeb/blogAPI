const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require("./routes/web");
const cors = require('cors');
require('dotenv').config();
require('./databases/Connect');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors({
    origin: true,
    credentials: true,
}))

// EndPoints
app.use(router);

// 404 page not found
app.get('*', (req, res) => {
    res.send('404 - Page Not Found');
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
