var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');


module.exports = function(app, config) {

    app.set('views', config.rootPath + '/public');
    app.use(logger('dev'));
    app.use(bodyParser());

    app.use(express.static(config.rootPath + '/public'));
};
