const assert = require('assert');
const controller = require('../../controllers/pdv_get_search_controller.js');
const PDV = [];
const respGetSearch = 'PDVs not found.';
const location = [-49.000, -25.000];

describe('Test controller search for location.', (done) => {

  it('01 - Err', () => {
    let res = {
      status: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };

    controller.getSearch((location, res) => {
      PDV.findAll({}, (error) => {
        assert.equal(error, respGetSearch);
        done();
      });
    });
  });

  it('02 - Data === null', () => {
    let data = null;
    let res = {
      status: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };
    controller.getSearch((location, res) => {
      PDV.findAll({}, (error, data) => {
        assert.equal(error, respGetSearch);
        done();
      });
    });
  });

  it('03 - data.length === 0', () => {
    let data = [];
    let res = {
      status: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };
    controller.getSearch((location, res) => {
      PDV.findAll({}, (error, data) => {
        if (data.length === 0) {
          assert.equal(error, respGetSearch);
          done();
        }
      });
    });
  });

  it('04 - Success', () => {
    let error = null;
    let data = {
      'id': '1',
      'tradingName': 'Teste',
      'ownerName': 'Teste',
      'document': '12345678901234',
      'coverageArea': {
        'type': 'Teste',
        'coordinates': [[[[location]]]],
      },
      'address': {
        'type': 'Teste',
        'coordinates': [location]
      }
    };
    const pdvs_3 = {
      'tradingName': 'Teste',
      'ownerName': 'Teste',
      'document': '12345678901234'
    };
    let res = {
      status: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };
    controller.getSearch((location, res) => {
      PDV.findAll({}, (error, data) => {
        assert.equal(pdvs_3, data);
        done();
      });
    });
  });
});
