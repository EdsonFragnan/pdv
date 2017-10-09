const assert = require('assert');
const controller = require('../../controllers/pdv_get_one_controller.js');
const PDV = [];
const respGetOne = 'PDV not found.';

describe('Test validation get one PDV', (done) => {

  it('01 - Err', () => {
    let id = '';
    let res = {
      status: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };

    controller.onePDV((id, res) => {
      PDV.findOne(id, (error) => {
        assert.equal(error, respGetOne);
        done();
      });
    });
  });

  it('02 - Data === null', () => {
    let id = '';
    let data = null;
    let res = {
      status: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };
    controller.onePDV((id, res) => {
      PDV.findOne(id, (error, data) => {
        assert.equal(error, respGetOne);
        done();
      });
    });
  });

  it('03 - Success', () => {
    let id = 1;
    let data = {
      'id': '1',
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
    controller.onePDV((id, res) => {
      PDV.findOne(id, (error, data) => {
        assert.equal(error, data);
        done();
      });
    });
  });
});
