'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const path = require('path');

const index = require('./routes/index');
const pessoa = require('./routes/pessoa-routes');

app.set('view engine', 'html');
app.use(express.static('./public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://projetogolfinho6bbm.heroku.com/pessoa/avaliar");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header');
    res.setHeader("Content-Security-Policy", "default-src 'self'");
    // res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

app.use('/', index);
app.use('/pessoa', pessoa);

module.exports = app;
