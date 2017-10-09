const assert = require('assert');
const controller = require('../../controllers/pdv_get_all_controller.js');
const PDV = [];
const respGetAll = 'PDVs not found.';

describe('Test controller get all PDVs.', (done) => {

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

    controller.allPDV((res) => {
      findAll(id, (error) => {
        assert.equal(error, respGetAll);
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
    controller.allPDV((res) => {
      findAll(id, (error, data) => {
        assert.equal(error, respGetAll);
        done();
      });
    });
  });

  it('03 - Err data.length == 0', () => {
    let id = 1;
    let data = [];
    let res = {
      status: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };
    controller.allPDV((res) => {
      findAll(id, (error, dataTrue) => {
        if (dataTrue.length === 0) {
          assert.equal(dataTrue, respGetAll);
          done();
        }
      });
    });
  });

  it('04 - Success', () => {
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
    controller.allPDV((res) => {
      findAll(id, (error, dataTrue) => {
        assert.equal(dataTrue, data);
        done();
      });
    });
  });
});
