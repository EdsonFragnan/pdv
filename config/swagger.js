const port = process.env.PORT || 3000;
const swaggerDefinition = {
  info: {
    title: 'PDV Swagger API',
    version: '1.0.0',
    description: 'APIs',
  },
  host: port === 3000 ? 'localhost:3000' : 'app-pdv.herokuapp.com',
  basePath: '/',
};
