module.exports.getSearch = (location, callback) => {
  const PDV = require('../models/pdv.js');
  const GeoJSON  = require('geojson');

  PDV.findAll((err, data) => {
    if (err || data === null) {
      return callback({status: 422, msg: 'PDVs não encontrados.'}, null);
    } else {
      //return callback(null, data);
      for (var i in data) {
        /*GeoJSON.parse(data[i], {Point: ['lat', 'lng']}, function(location){
          console.log(location)
          return callback(null, location);
        });*/
        console.log(GeoJSON.parse(data[i].coverageArea.coordinates, {Point: location}));
      }
    }
  });
};
