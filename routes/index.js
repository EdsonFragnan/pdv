module.exports = app => {
  const controller = app.controllers;

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
   *       200:
   *         description: pdvs
   */
  app.get('/pdv', (req, res) => {
    controller.pdv_get_all_controller.allPDV((err, data) => {
      if (err) {
        res.status(err.status).json({mensagem: err.msg});
      } else {
        res.json(data);
      }
    });
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
  *         type: integer
  *     responses:
  *       '200':
  *         description: Retorna PDV.
  *       '204':
  *         description: Retorna uma mensagem.
  */
  app.get('/pdv/:id', (req, res) => {
    controller.pdv_get_one_controller.onePDV(req.params.id, (err, data) => {
      if (err) {
        res.status(err.status).json({mensagem: err.msg});
      } else {
        res.json(data);
      }
    });
  });

  /**
  * @swagger
  * /search:
  *   get:
  *     description: Retorna PDV por latitude e longitude.
  *     tags:
  *      - PDV
  *     produces:
  *      - application/json
  *     responses:
  *       200:
  *         description: pdvs
  */
  app.get('/search', (req, res) => {
    controller.pdv_get_search_controller.getSearch(req.query, (err, data) => {
      if (err) {
        res.status(err.status).json({mensagem: err.msg});
      } else {
        res.json(data);
      }
    });
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
  *             - coverageArea
  *             - type
  *             - coordinates
  *             - address
  *             - type
  *             - coordinates
  *           properties:
  *             id:
  *               type: number
  *             tradingName:
  *               type: string
  *             ownerName:
  *               type: string
  *             document:
  *               type: string
  *             coverageArea:
  *               type: object
  *               $ref: '#/definitions'
  *             address:
  *               type: object
  *               $ref: '#/definitions'
  *           example: {
  *             "id": 1,
  *             "tradingName": "Adega Pinheiros",
  *             "ownerName": "Ze da Silva",
  *             "document": "04.433.714/0001-44",
  *             "coverageArea": {
  *               "type": "MultiPolygon",
  *               "coordinates": [
  *                 [
  *                    [
  *                       [
  *                          -49.36299,
  *                          -25.4515
  *                       ],
  *                       [
  *                          -49.35334,
  *                         -25.45065
  *                       ]
  *                   ]
  *                 ]
  *               ]
  *             },
  *             "address": {
  *               "type": "Point",
  *               "coordinates": [
  *                 -49.33425,
  *                 -25.380995
  *               ]
  *             }
  *           }
  *     responses:
  *       200:
  *         description: pdvs
  *       422:
  *         description: erro
  */
  app.post('/pdv', (req, res) => {
    controller.pdv_post_pdv_controller.postPDV(req.body, (err, data) => {
      if (err) {
        res.status(err.status).json({mensagem: err.msg});
      } else {
        res.json(data);
      }
    });
  });
}
