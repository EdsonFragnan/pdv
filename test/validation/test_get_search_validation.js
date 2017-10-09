const assert = require('assert');
const validation = require('../../validation/validation_get_search.js');

describe('Test validation get Search', (done) => {
  const mensagem_LNG = 'Invalid LNG.';
  const mensagem_LAT = 'Invalid LAT.';
  const mensagem_TYPESEARCH = 'Invalid type search.';
  const query = {
    'lng': '',
    'lat': '',
    'tipobusca': ''
  };

  describe('Test for LNG', () => {
    it('01 - Invalid LNG - Empty.', (done) => {
      query.lng = '';
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, mensagem_LNG);
        }
      };
      validation.validation_get_search(query, res);
      done();
    });

    it('02 - Invalid LNG - Null.', (done) => {
      query.lng = null;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, mensagem_LNG);
        }
      };
      validation.validation_get_search(query, res);
      done();
    });

    it('03 - Invalid LNG - Undefined.', (done) => {
      query.lng = undefined;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, mensagem_LNG);
        }
      };
      validation.validation_get_search(query, res);
      done();
    });
  });

  describe('Test for LAT', () => {
    it('01 - Invalid LAT - Empty.', (done) => {
      query.lng = '25.0000';
      query.lat = '';
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, mensagem_LAT);
        }
      };
      validation.validation_get_search(query, res);
      done();
    });

    it('02 - Invalid LAT - Null.', (done) => {
      query.lng = '25.0000';
      query.lat = null;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, mensagem_LAT);
        }
      };
      validation.validation_get_search(query, res);
      done();
    });

    it('03 - Invalid LAT - Undefined.', (done) => {
      query.lng = '25.0000';
      query.lat = undefined;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, mensagem_LAT);
        }
      };
      validation.validation_get_search(query, res);
      done();
    });
  });

  describe('Test for Type Search', () => {
    it('01 - Invalid Type Search - Empty', (done) => {
      query.lng = '25.0000';
      query.lat = '49.0000';
      query.tipobusca = '';
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, mensagem_TYPESEARCH);
        }
      };
      validation.validation_get_search(query, res);
      done();
    });

    it('02 - Invalid Type Search - Null', (done) => {
      query.lng = '25.0000';
      query.lat = '49.0000';
      query.tipobusca = null;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, mensagem_TYPESEARCH);
        }
      };
      validation.validation_get_search(query, res);
      done();
    });

    it('03 - Invalid Type Search - Undefined', (done) => {
      query.lng = '25.0000';
      query.lat = '49.0000';
      query.tipobusca = undefined;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, mensagem_TYPESEARCH);
        }
      };
      validation.validation_get_search(query, res);
      done();
    });
  });

  describe('Test Success', () => {
    it('01 - Valid ID', (done) => {
      let id = 1;
      let res = {
        status: (responseStatus) => {},
        json: (responseMessage) => {}
      };
      validation.validation_get_search(query, res);
      done();
    });
  });

});
