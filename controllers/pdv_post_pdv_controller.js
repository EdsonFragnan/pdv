'use strict';

module.exports.postPDV = (pdv, res) => {
  const GeoJSON = require('geojson');
  const PolygonCoordinates = require('polygon-coordinates');
  const TurfMultiPolygon = require('turf-multipolygon');
  const ModelPdv = require('../models/pdv.js');

  const TreatObject = (point_pdv) => {
    let object = {
      'id': point_pdv.properties.id,
      'tradingName': point_pdv.properties.tradingName,
      'ownerName': point_pdv.properties.ownerName,
      'document': point_pdv.properties.document,
      'coverageArea': {
        'type': point_pdv.multi_polygon_object.geometry.type,
        'coordinates': point_pdv.multi_polygon_object.geometry.coordinates
      },
      'address': {
        'type': point_pdv.geometry.type,
        'coordinates': point_pdv.geometry.coordinates
      }
    };
    return object;
  };

  const InserPdv = (object) => {
    ModelPdv.postPDV(object, (err, data) => {
      if (err) {
        res.status(422).json({message: 'PDV not registered.'});
      } else {
        res.json(data);
      }
    });
  };

  const MultiPolygon = (point_pdv) => {
    let multi_polygon_object = TurfMultiPolygon(point_pdv.polygon_pdv);
    point_pdv.multi_polygon_object = multi_polygon_object;
    let treat_object = TreatObject(point_pdv);
    InserPdv(treat_object);
  };

  const Polygon = (point_pdv) => {
    let polygon_pdv = PolygonCoordinates.polygonCoordinates(
                        point_pdv.geometry.coordinates[0],
                        point_pdv.geometry.coordinates[1],
                        22, point_pdv.properties.pointDistance
                      );
    point_pdv.polygon_pdv = polygon_pdv;
    MultiPolygon(point_pdv);
  };

  const Point = (pdv) => {
    let point_pdv = GeoJSON.parse(pdv, {Point: ['lat', 'lng']});
    Polygon(point_pdv)
  };

  Point(pdv);
};
