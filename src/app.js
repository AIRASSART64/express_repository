const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/test', (req, res)=> {
    console.log('route test ok');
    res.send("test de la route ok")
})

module.exports = app;