'use strict'

var express = require('express');
var Routes = require('./routes/routes');

/* Express */
var app = express();

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/* CORS */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/* Rewrite routes */
app.use('/api/users', Routes);

/* Export module */
module.exports = app;