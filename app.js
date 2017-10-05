const	express	= require('express'),
      bodyParser = require('body-parser'),
      consign	= require('consign'),
      app	=	express(),
      mongoose = require('mongoose'),
      swaggerJSDoc = require('swagger-jsdoc'),
      uristring =
        process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        'mongodb://mydb_pdv:123456@ds111565.mlab.com:11565/heroku_rth83m55';

const swaggerDefinition = {
  info: {
    title: 'PDV Swagger API',
    version: '1.0.0',
    description: 'APIs',
  },
  host: 'localhost:3000',
  basePath: '/',
};

const rotas = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/index.js']
};

const swaggerSpec = swaggerJSDoc(rotas);

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERRO conexão: ' + uristring + '. ' + err);
  } else {
    console.log ('Sucesso conexão: ' + uristring);
  }
});

app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

consign()
    .include('infra')
		.include('models')
    .include('controllers')
    .then('routes')
    .into(app)

module.exports = app;
