module.exports.postPDV = (pdv, res) => {
  const PDV = require('../models/pdv.js');
  const PolygonCoordinates = require('polygon-coordinates');
  const Polygon = PolygonCoordinates.polygonCoordinates(pdv.lat, pdv.lng, 22, pdv.pointDistance);
  const MultiPolygon = [];
  MultiPolygon.push(Polygon);
  const object = {
    'id': pdv.id,
    'tradingName': pdv.tradingName,
    'ownerName': pdv.ownerName,
    'document': pdv.document,
    'coverageArea': {
      'type': 'MultiPolygon',
      'coordinates': [MultiPolygon]
    },
    'address': {
      'type': 'Point',
      'coordinates': [pdv.lat, pdv.lng]
    }
  };
  PDV.postPDV(object, (err, data) => {
    if (err) {
      res.status(422).json({mensagem: 'PDV not registered.'});
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
