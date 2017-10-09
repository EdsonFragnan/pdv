'use strict';

const	express	= require('express'),
      bodyParser = require('body-parser'),
      consign	= require('consign'),
      app	=	express(),
      swaggerJSDoc = require('swagger-jsdoc'),
      path = require('path'),
      swagger = require('./config/swagger');

const rotas = {
  swaggerDefinition: swagger,
  apis: ['./routes/index.js']
};
const swaggerSpec = swaggerJSDoc(rotas);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

consign()
    .include('./config/db.js')
    .include('infra')
		.include('models')
    .include('controllers')
    .then('routes')
    .into(app)

module.exports = app;
