'use strict';
const CNPJ = require("cpf_cnpj").CNPJ;
module.exports.validation_post_pdv = (body, res) => {
    const controller_postpdv = require('../controllers/pdv_post_pdv_controller');
    if (body.id === '' || body.id === null || body.id === undefined) {
      res.status(422);
      res.json({mensagem: 'Invalid PDV ID.'});
    } else if (body.tradingName === '' || body.tradingName === null || body.tradingName === undefined) {
      res.status(422);
      res.json({mensagem: 'Invalid Trading Name.'});
    } else if (body.ownerName === '' || body.ownerName === null || body.ownerName === undefined) {
        res.status(422);
        res.json({mensagem: 'Invalid Owner Name.'});
    } else if (CNPJ.isValid(body.document) === false) {
        res.status(422);
        res.json({mensagem: 'Invalid Document.'});
    } else if (body.document === '' || body.document === null || body.document === undefined) {
        res.status(422);
        res.json({mensagem: 'Invalid Document.'});
    } else if (body.lng === '' || body.lng === null || body.lng === undefined) {
        res.status(422);
        res.json({mensagem: 'Invalid LNG.'});
    } else if (body.lat === '' || body.lat === null || body.lat === undefined) {
        res.status(422);
        res.json({mensagem: 'Invalid LAT.'});
    } else if (body.distanceType === '' || body.distanceType === null || body.distanceType === undefined) {
        res.status(422);
        res.json({mensagem: 'Invalid Type Distance.'});
    } else if (body.pointDistance === '' || body.pointDistance === null || body.pointDistance === undefined) {
        res.status(422);
        res.json({mensagem: 'Invalid Point Distance.'});
    } else {
      controller_postpdv.postPDV(body, res);
    }
};
