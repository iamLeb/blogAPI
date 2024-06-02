const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// EndPoints
app.get('/', (req, res) => {
    res.send('Page Working');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
