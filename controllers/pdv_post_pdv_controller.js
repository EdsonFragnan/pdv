module.exports.postPDV = (pdv, callback) => {
  const PDV = require('../models/pdv.js');
  PDV.postPDV(pdv, (err, data) => {
    if (err) {
      return callback({status: 422, msg: 'PDV não cadastrado.'}, null);
    } else {
      return callback(null, data);
    }
  });
}
