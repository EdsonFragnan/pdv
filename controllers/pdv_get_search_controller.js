module.exports.getSearch = (location, callback) => {
  const PDV = require('../models/pdv.js');
  const GeoJSON  = require('geojson');

  PDV.findAll((err, data) => {
    if (err) {
      return callback({status: 204, msg: 'PDVs não encontrados.'}, null);
    } else {
      //return callback(null, data);
      for (var i in data) {
        GeoJSON.parse(data[i], {Point: ['lat', 'lng']}, function(geojson){
          console.log(geojson)
          return callback(null, geojson);
        });
        //console.log(GeoJSON.parse(data[i].coverageArea.coordinates, {Point: location}));
      }
    }
  });
};
