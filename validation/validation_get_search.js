module.exports.validation_get_search = (query, res) => {
    const controller_get_search_pdv = require('../controllers/pdv_get_search_controller');
    if (query.lng === '' || query.lng === null || query.lng === undefined) {
      res.status(422).json({mensagem: 'Invalid LNG.'});
    } else if (query.lat === '' || query.lat === null || query.lat === undefined) {
      res.status(422).json({mensagem: 'Invalid LAT.'});
    } else if (query.tipobusca === 'Point' || query.tipobusca === 'MultiPolygon') {
      controller_get_search_pdv.getSearch(query, res);
    } else {
      res.status(422).json({mensagem: 'Invalid search type.'});
    };
};
