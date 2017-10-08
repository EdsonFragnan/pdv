module.exports = app => {
  const controller = app.controllers;
  const validation_get_one = require('../validation/validation_get_one.js');
  const validation_search = require('../validation/validation_get_search.js');
  const validation_postpdv = require('../validation/validation_post_pdv.js');
  const path = require('path');

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
  });

  app.get('/documentation');

   /**
   * @swagger
   * definition:
   *   properties:
   *    type:
   *      type: string
   *    coordinates:
   *      type: array
   */

   /**
   * @swagger
   * /pdv:
   *   get:
   *     description: Retorna todos PDVs.
   *     tags:
   *      - PDV
   *     produces:
   *      - application/json
   *     responses:
   *       '200':
   *         description: Retorna PDV.
   *       '422':
   *         description: Retorna mensagem de insucesso.
   */
  app.get('/pdv', (req, res) => {
    controller.pdv_get_all_controller.allPDV(res);
  });

  /**
  * @swagger
  * /pdv/{id}:
  *   get:
  *     description: Retorna PDV por id.
  *     tags:
  *      - PDV
  *     produces:
  *      - application/json
  *     parameters:
  *       - name: id
  *         description: Identificador do PDV
  *         in: path
  *         required: true
  *         type: number
  *     responses:
  *       '200':
  *         description: Retorna PDV.
  *       '422':
  *         description: Retorna mensagem de insucesso.
  */
  app.get('/pdv/:id', (req, res) => {
    validation_get_one.validation_one(req.params.id, res);
  });

  /**
  * @swagger
  * /location/pdv:
  *   get:
  *     description: Retorna PDV por latitude e longitude.
  *     tags:
  *      - PDV
  *     produces:
  *      - application/json
  *     parameters:
  *       - name: lat
  *         description: Latitude da coordenada.
  *         in: query
  *         required: true
  *         type: number
  *       - name: lng
  *         description: Longitude da coordenada.
  *         in: query
  *         required: true
  *         type: number
  *       - name: tipobusca
  *         description: Tipo de busca.
  *         in: query
  *         required: true
  *         items:
  *           type: string
  *         enum: [
  *           Point, MultiPolygon
  *         ]
  *     responses:
  *       '200':
  *         description: Retorna PDV.
  *       '422':
  *         description: Retorna mensagem de insucesso.
  */
  app.get('/location/pdv', (req, res) => {
    validation_search.validation_get_search(req.query, res);
  });

  /**
  * @swagger
  * /pdv:
  *   post:
  *     description: Grava o PDV.
  *     tags:
  *      - PDV
  *     produces:
  *      - application/json
  *     parameters:
  *       - name: body
  *         in: body
  *         required: true
  *         schema:
  *           type: object
  *           required:
  *             - id
  *             - tradingName
  *             - ownerName
  *             - document
  *             - lng
  *             - lat
  *             - distanceType
  *             - pointDistance
  *           properties:
  *             id:
  *               type: number
  *             tradingName:
  *               type: string
  *             ownerName:
  *               type: string
  *             document:
  *               type: string
  *             lat:
  *               type: float
  *             lng:
  *               type: float
  *             distanceType:
  *               type: string
  *             pointDistance:
  *               type: number
  *           example: {
  *             "id": 1,
  *             "tradingName": "Adega Pinheiros",
  *             "ownerName": "Ze da Silva",
  *             "document": "04.433.714/0001-44",
  *             "lat": -49.33425,
  *             "lng": -25.380995,
  *             "distanceType": KM,
  *             "pointDistance": 2
  *           }
  *     responses:
  *       '200':
  *         description: Retorna PDV.
  *       '422':
  *         description: Retorna mensagem de insucesso.
  */
  app.post('/pdv', (req, res) => {
    validation_postpdv.validation_post_pdv(req.body, res);
  });

  // Validation to route not found.
  app.get('*', function(req, res){
    res.status(404).json('Route Not Found!');
  });
}
