module.exports.getSearch = (location, callback) => {
  const PDV = require('../models/pdv.js');
  const array_area = (pontos, endereco, callback) => {
    const lista_pdvs = [];
    for (var i in pontos) {
      const endereco_area = pontos[i].coverageArea.coordinates;
      const array_1 = endereco_area[0],
            array_2 = array_1[0];
            for (var j in array_2) {
              const arrayK = array_2[j];
              const array = arrayK.concat(arrayK);
              if (endereco[0] === array[1] && endereco[1] === array[0]) {
                const pdvs_2 = {
                  'tradingName': pontos[i].tradingName,
                  'ownerName': pontos[i].ownerName,
                  'document': pontos[i].document
                };
                lista_pdvs.push(pdvs_2);
              } else {
                lista_pdvs.push()
              }
            }
    }
    callback(lista_pdvs);
  };

  const array_places = (tipo, pontos, callback) => {
    const coordenada = new Array(parseFloat(location.lat), parseFloat(location.lng));
    const lista_pdvs = [];
    if (tipo.tipobusca === 'Point') {
      for (var i in pontos) {
        const endereco = pontos[i].address.coordinates;
        if (endereco[0] === endereco[0] && coordenada[1] === coordenada[1]) {
          const pdvs = {
            'tipo_coordenada': 'Coordenada Precisa.',
            'tradingName': pontos[i].tradingName,
            'ownerName': pontos[i].ownerName,
            'document': pontos[i].document
          };
          lista_pdvs.push(pdvs)
        } else {
          lista_pdvs.push()
        }
      }
      callback(lista_pdvs);
    } else {
      array_area(pontos, coordenada, (resp) => {
        callback(resp);
      });
    }
  };

  PDV.findAll((err, data) => {
    if (err || data === null) {
      return callback({status: 422, msg: 'PDVs não encontrados.'}, null);
    } else {
      array_places(location, data, (resp) => {
        if (resp.length === 0) {
          return callback({status: 422, msg: 'PDVs não encontrados.'}, null);
        } else if (resp.length === 1) {
          return callback(null, resp[0]);
        } else {
          return callback(null, {'estabelecimentos_proximos': resp});
        }
      });
    }
  });
};
