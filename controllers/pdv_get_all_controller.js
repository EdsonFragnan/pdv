'use strict';

module.exports.allPDV = (res) => {
  const PDV = require('../models/pdv.js');

  const TreatObject = (data) => {
    let newObejct = []
    for (let i in data) {
      let response = {
        'id': data[i].id,
        'tradingName': data[i].tradingName,
        'ownerName': data[i].ownerName,
        'document': data[i].document,
        'coverageArea': {
          'type': data[i].coverageArea.type,
          'coordinates': data[i].coverageArea.coordinates,
        },
        'address': {
          'type': data[i].address.type,
          'coordinates': data[i].address.coordinates
        }
      };
      newObejct.push(response);
    }
    return newObejct;
  };

  const GetAllPdv = () => {
    PDV.findPdv({}, (err, data) => {
      if (err || data === null) {
        res.status(422);
        res.json({message: 'PDVs not found.'});
      } else {
        if (data.length === 0) {
          res.status(422);
          res.json({message: 'PDVs not found.'});
        } else {
          res.json(TreatObject(data));
        }
      }
    });
  };
  GetAllPdv();
};
