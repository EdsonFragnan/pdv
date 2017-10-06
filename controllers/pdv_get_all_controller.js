module.exports.allPDV = (callback) => {
  const PDV = require('../models/pdv.js');
  PDV.findAll((err, data) => {
    if (err || data === null) {
      return callback({status: 422, msg: 'PDVs não encontrados.'}, null);
    } else {
      if (data.length === 0) {
        return callback({status: 422, msg: 'PDVs não encontrados.'}, null);
      } else {
        return callback(null, data);
      }
    }
  });
};
