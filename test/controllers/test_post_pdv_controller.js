const assert = require('assert');
const controller = require('../../controllers/pdv_post_pdv_controller.js');
const PDV = [];
const respPostOne = 'PDV not registered.';

describe('Test controller post one PDV', (done) => {

  it('01 - Err', () => {
    let envio = {
      'id': 1,
      'tradingName': 'Teste',
      'ownerName': 'Teste',
      'document': '12345678901234',
      'coverageArea': {
        'type': 'Teste',
        'coordinates': [],
      },
      'address': {
        'type': 'Teste',
        'coordinates': []
      }
    };
    let res = {
      status: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };

    controller.postPDV((envio, res) => {
      PDV.postPDV(envio, (error) => {
        assert.equal(error, respPostOne);
        done();
      });
    });
  });

  it('02 - Success', () => {
    let envio = {
      'id': 1,
      'tradingName': 'Teste',
      'ownerName': 'Teste',
      'document': '12345678901234',
      'coverageArea': {
        'type': 'Teste',
        'coordinates': [],
      },
      'address': {
        'type': 'Teste',
        'coordinates': []
      }
    };
    let res = {
      status: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };
    controller.postPDV((envio, res) => {
      PDV.postPDV(envio, (error, data) => {
        assert.equal(error, data);
        done();
      });
    });
  });
});
