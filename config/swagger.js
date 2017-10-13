'use strict';

module.exports = app => {
  const swaggerJSDoc = require('swagger-jsdoc'),
    Express	= require('express'),
    BodyParser = require('body-parser'),
    Path = require('path'),
    Routes = require('../routes/index.js'),
    DocSwagger = './../swagger.json';
  let port = process.env.PORT || 3000,
      swagger = {
        info: {
          title: 'PDV Swagger API',
          version: '1.0.0',
          description: 'APIs',
        },
        host: port === 3000 ? 'localhost:3000' : 'app-pdv.herokuapp.com',
        basePath: '/',
      },
      rotas = {
        swaggerDefinition: swagger,
        apis: [Routes]
      };
  app.use(BodyParser.json());
  app.use(Express.static(Path.join(__dirname, DocSwagger)));
  app.use(Express.static(Path.join(__dirname, '../public')));
  app.get(DocSwagger, function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerJSDoc(rotas));
  });
};
