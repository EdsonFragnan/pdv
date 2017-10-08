module.exports.allPDV = (res) => {
  const PDV = require('../models/pdv.js');
  PDV.findAll((err, data) => {
    if (err || data === null) {
      res.status(422).json({mensagem: 'PDVs not found.'});
    } else {
      if (data.length === 0) {
        res.status(422).json({mensagem: 'PDVs not found.'});
      } else {
        const newObejct = []
        for (var i in data) {
          const response = {
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
        res.json(newObejct);
      }
    }
  });
};
