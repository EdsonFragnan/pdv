'use strict';

module.exports.validation_one = (id, res) => {
    const controller_one_pdv = require('../controllers/pdv_get_one_controller');
    if (id === '' || id === null || id === undefined) {
      res.status(422);
      res.json({mensagem: 'Invalid PDV ID.'});
    } else {
      controller_one_pdv.onePDV(id, res);
    };
};
