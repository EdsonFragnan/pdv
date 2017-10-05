module.exports.onePDV = (id, callback) => {
  const PDV = require('../models/pdv.js');
  PDV.findOne(id, (err, data) => {
    console.log(err)
    console.log(data)
    if (err || data === null) {
      return callback({status: 422, msg: 'PDV não encontrado.'}, null);
    } else {
      return callback(null, data);
    }
  });
};
