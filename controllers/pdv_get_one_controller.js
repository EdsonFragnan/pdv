'use strict';

module.exports.onePDV = (id, res) => {
  const PDV = require('../models/pdv.js');
  const TreatObject = (data) => {
    let response = {
      'id': data.id,
      'tradingName': data.tradingName,
      'ownerName': data.ownerName,
      'document': data.document,
      'coverageArea': {
        'type': data.coverageArea.type,
        'coordinates': data.coverageArea.coordinates,
      },
      'address': {
        'type': data.address.type,
        'coordinates': data.address.coordinates
      }
    };
    return response;
  };

  const GetOnePdv = (id) => {
    PDV.findOne({id:id}, (err, data) => {
      if (err || data === null) {
        res.status(422);
        res.json({message: 'PDV not found.'});
      } else {
        res.json(TreatObject(data));
      }
    });
  };
  GetOnePdv(id);
};
