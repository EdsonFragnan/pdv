'use strict';

module.exports.getSearch = (location, res) => {
  const PDV = require('../models/pdv.js');
  const array_area = (pontos, endereco, callback) => {
    const lista_pdvs = [];
    const finalArray = [];
    for (var i in pontos) {
      const endereco_area = pontos[i].coverageArea.coordinates;
      const array_1 = endereco_area[0],
            array_2 = array_1[0];
            for (var j in array_2) {
              const arrayK = array_2[j];
              lista_pdvs.push(arrayK);
              for (var k in lista_pdvs) {
                if (endereco[0] === lista_pdvs[k][0] && endereco[1] === lista_pdvs[k][1]) {
                  const pdvs_2 = {
                    'id': pontos[i].id,
                    'tradingName': pontos[i].tradingName,
                    'ownerName': pontos[i].ownerName,
                    'document': pontos[i].document
                  };
                  finalArray.push(pdvs_2);
                } else {
                  finalArray.push()
                }
              }
            }
    }
    callback(finalArray);
  };

  const array_places = (tipo, pontos, callback) => {
    const coordenada = new Array(parseFloat(tipo.lat), parseFloat(tipo.lng));
    const lista_pdvs = [];
    if (tipo.tipobusca === 'Point') {
      for (var i in pontos) {
        const endereco = pontos[i].address.coordinates;
        if (endereco[0] === coordenada[0] && endereco[1] === coordenada[1]) {
          const pdvs = {
            'precise_coordinate': 'Precise coordinate.',
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
      res.status(422);
      res.json({mensagem: 'PDVs not found.'});
    } else {
      array_places(location, data, (resp) => {
        if (resp.length === 0) {
          res.status(422);
          res.json({mensagem: 'PDVs not found.'});
        } else if (resp.length === 1) {
          res.json(resp[0]);
        } else {
          if (location.tipobusca === 'Point') {
            res.json(resp[0]);
          } else {
            const newArray = [];
            const arrayId = [];
            const arrayFinal = [];
            for (let k in resp) {
              arrayId.push(resp[k].id);
            }

            for (let i in arrayId) {
              if (arrayId.indexOf(arrayId[i]) != i) {
                newArray.push();
              } else {
                newArray.push(arrayId[i]);
              }
            }

            for (let na in newArray) {
              for (let a in data) {
                if (data[a].id === newArray[na]) {
                  const pdvs_3 = {
                    'tradingName': data[a].tradingName,
                    'ownerName': data[a].ownerName,
                    'document': data[a].document
                  };
                  arrayFinal.push(pdvs_3);
                } else {
                  arrayFinal.push();
                }
              }
            }
            res.json({'nearby_establishments': arrayFinal});
          }
        }
      });
    }
  });
};
