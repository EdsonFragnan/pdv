module.exports.allPDV = (callback) => {
  const PDV = require('../models/pdv.js');
  PDV.findAll((err, data) => {
    if (err) {
      return callback({status: 204, msg: 'PDVs não encontrados.'}, null);
    } else {
      return callback(null, data);
    }
  });
};
