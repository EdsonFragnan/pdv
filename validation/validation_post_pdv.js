'use strict';

module.exports.validation_post_pdv = (body, res) => {
    const controller_postpdv = require('../controllers/pdv_post_pdv_controller');
    switch(body) {
      case (body.id === '' || body.id === null || body.id === undefined):
          res.status(422).json({mensagem: 'Invalid PDV ID.'});
          break;
      case (body.tradingName === '' || body.tradingName === null || body.tradingName === undefined):
          res.status(422).json({mensagem: 'Invalid Trading Name.'});
          break;
      case (body.ownerName === '' || body.ownerName === null || body.ownerName === undefined):
          res.status(422).json({mensagem: 'Invalid Owner Name.'});
          break;
      case (body.document === '' || body.document === null || body.document === undefined):
          res.status(422).json({mensagem: 'Invalid Document.'});
          break;
      case (body.lng === '' || body.lng === null || body.lng === undefined):
          res.status(422).json({mensagem: 'Invalid LNG.'});
          break;
      case (body.lat === '' || body.lat === null || body.lat === undefined):
          res.status(422).json({mensagem: 'Invalid LAT.'});
          break;
      case (body.distanceType === '' || body.distanceType === null || body.distanceType === undefined):
          res.status(422).json({mensagem: 'Invalid Type Distance.'});
          break;
      case (body.pointDistance === '' || body.pointDistance === null || body.pointDistance === undefined):
          res.status(422).json({mensagem: 'Invalid Point Distance.'});
          break;
      default:
          controller_postpdv.postPDV(body, res);
    }
};
