module.exports.onePDV = (id, res) => {
  const PDV = require('../models/pdv.js');
  PDV.findOne(id, (err, data) => {
    if (err || data === null) {
      res.status(422).json({mensagem: 'PDV not found.'});
    } else {
        const response = {
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
        res.json(response);
      }
  });
};
