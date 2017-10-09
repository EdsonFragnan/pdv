const assert = require('assert');
const validation = require('../../validation/validation_get_one.js');

describe('Test validation get one PDV', (done) => {
  const mensagem = 'Invalid PDV ID.';
  it('01 - Invalid ID', (done) => {
    let id = '';
    let res = {
      status: (responseStatus) => {
        assert.equal(responseStatus, 422);
      },
      json: (responseMessage) => {
        assert.equal(responseMessage.mensagem, mensagem);
      }
    };
    validation.validation_one(id, res);
    done();
  });

  it('02 - Invalid ID', (done) => {
    let id = null;
    let res = {
      status: (responseStatus) => {
        assert.equal(responseStatus, 422);
      },
      json: (responseMessage) => {
        assert.equal(responseMessage.mensagem, mensagem);
      }
    };
    validation.validation_one(id, res);
    done();
  });

  it('03 - Invalid ID', (done) => {
    let id = undefined;
    let res = {
      status: (responseStatus) => {
        assert.equal(responseStatus, 422);
      },
      json: (responseMessage) => {
        assert.equal(responseMessage.mensagem, mensagem);
      }
    };
    validation.validation_one(id, res);
    done();
  });

  it('04 - Valid ID', (done) => {
    let id = 1;
    let res = {
      status: (responseStatus) => {},
      json: (responseMessage) => {}
    };
    validation.validation_one(id, res);
    done();
  });

});
