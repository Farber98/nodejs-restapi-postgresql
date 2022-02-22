'use strict'

var app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT,() => {console.log('http://localhost:'+process.env.PORT+'/api/test');})
        