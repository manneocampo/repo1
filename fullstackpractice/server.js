const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.urlencoded({
	extended: false
}));

const routes = require('./routes.js');
app.use('/', routes);

