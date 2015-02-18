var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/routes')(app, config);

app.listen(config.port, function (req, res) {
   console.log('Start Listening on port ' + config.port + '...');
});
