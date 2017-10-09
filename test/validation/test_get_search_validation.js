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
    it('01 - Invalid LNG - Empty.', () => {
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

    it('02 - Invalid LNG - Null.', () => {
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

    it('03 - Invalid LNG - Undefined.', () => {
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
    it('01 - Invalid LAT - Empty.', () => {
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

    it('02 - Invalid LAT - Null.', () => {
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

    it('03 - Invalid LAT - Undefined.', () => {
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
    it('01 - Invalid Type Search - Empty', () => {
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

    it('02 - Invalid Type Search - Null', () => {
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

    it('03 - Invalid Type Search - Undefined', () => {
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
    it('01 - Valid ID', () => {
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
