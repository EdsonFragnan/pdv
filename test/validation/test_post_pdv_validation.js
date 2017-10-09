const assert = require('assert');
const validation = require('../../validation/validation_post_pdv.js');

describe('Test validation post PDV', (done) => {
  const body = {
    'id': '',
    'tradingName': '',
    'ownerName': '',
    'document': '',
    'lng': '',
    'lat': '',
    'distanceType': '',
    'pointDistance': ''
  };

  const messageId = 'Invalid PDV ID.';
  const messageTradingName = 'Invalid Trading Name.'
  const messageOwnerName = 'Invalid Owner Name.'
  const messageDocument = 'Invalid Document.'
  const messageLng = 'Invalid LNG.'
  const messageLat = 'Invalid LAT.'
  const messageTypeDistance = 'Invalid Type Distance.'
  const messagePointDistance = 'Invalid Point Distance.'

  describe('01 - Test for ID', () => {
    it('01 - Invalid ID', () => {
      body.id = '';
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messageId);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });

    it('02 - Invalid ID', () => {
      body.id = null;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messageId);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });

    it('03 - Invalid ID', () => {
      body.id = undefined;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messageId);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });
  });
  describe('02 - Test for tradingName', () => {
    it('01 - Invalid tradingName - Empty.', () => {
        body.id = '1';
        body.tradingName = '';
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageTradingName);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });

      it('02 - Invalid tradingName - Null.', () => {
        body.id = '1';
        body.tradingName = null;
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageTradingName);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });

      it('03 - Invalid tradingName - Undefined.', () => {
        body.id = '1';
        body.tradingName = undefined;
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageTradingName);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });
  });
  describe('03 - Test for ownerName', () => {
    it('01 - Invalid ownerName - Empty.', () => {
        body.id = '1';
        body.tradingName = 'Teste';
        body.ownerName = '';
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageOwnerName);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });

      it('02 - Invalid ownerName - Null.', () => {
        body.id = '1';
        body.tradingName = 'Teste';
        body.ownerName = null;
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageOwnerName);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });

      it('03 - Invalid ownerName - Undefined.', () => {
        body.id = '1';
        body.tradingName = 'Teste';
        body.ownerName = undefined;
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageOwnerName);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });
  });
  describe('04 - Test for document', () => {
    it('01 - Invalid document - Empty.', () => {
        body.id = '1';
        body.tradingName = 'Teste';
        body.ownerName = 'Teste';
        body.document = '';
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageDocument);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });

      it('02 - Invalid document - Null.', () => {
        body.id = '1';
        body.tradingName = 'Teste';
        body.ownerName = 'Teste';
        body.document = null;
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageDocument);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });

      it('03 - Invalid document - Undefined.', () => {
        body.id = '1';
        body.tradingName = 'Teste';
        body.ownerName = 'Teste';
        body.document = undefined;
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageDocument);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });
  });

  describe('05 - Test for lng', () => {
    it('01 - Invalid LNG - Empty.', () => {
        body.id = '1';
        body.tradingName = 'Teste';
        body.ownerName = 'Teste';
        body.document = '123456789101234';
        body.lng = '';
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageLng);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });

      it('02 - Invalid LNG - Null.', () => {
        body.id = '1';
        body.tradingName = 'Teste';
        body.ownerName = 'Teste';
        body.document = '123456789101234';
        body.lng = null;
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageLng);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });

      it('03 - Invalid LNG - Undefined.', () => {
        body.id = '1';
        body.tradingName = 'Teste';
        body.ownerName = 'Teste';
        body.document = '123456789101234';
        body.lng = undefined;
        let res = {
          status: (responseStatus) => {
            assert.equal(responseStatus, 422);
          },
          json: (responseMessage) => {
            assert.equal(responseMessage.mensagem, messageLng);
          }
        };
        validation.validation_post_pdv(body, res);
        done();
      });
  });

  describe('06 - Test for lat', () => {
    it('01 - Invalid LAT - Empty.', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = '';
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messageLat);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });

    it('02 - Invalid LAT - Null.', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = null;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messageLat);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });

    it('03 - Invalid LAT - Undefined.', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = undefined;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messageLat);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });
  });
  describe('07 - Test for distanceType', () => {
    it('01 - Invalid distanceType - Empty.', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = '49.0000';
      body.distanceType = '';
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messageTypeDistance);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });

    it('02 - Invalid distanceType - Null.', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = '49.0000';
      body.distanceType = null;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messageTypeDistance);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });

    it('03 - Invalid distanceType - Undefined.', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = '49.0000';
      body.distanceType = undefined;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messageTypeDistance);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });
  });
  describe('08 - Test for pointDistance', () => {
    it('01 - Invalid distanceType - Empty.', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = '49.0000';
      body.distanceType = 'KM';
      body.pointDistance = '';
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messagePointDistance);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });

    it('02 - Invalid distanceType - Null.', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = '49.0000';
      body.distanceType = 'KM';
      body.pointDistance = null;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messagePointDistance);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });

    it('03 - Invalid distanceType - Undefined.', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = '49.0000';
      body.distanceType = 'KM';
      body.pointDistance = undefined;
      let res = {
        status: (responseStatus) => {
          assert.equal(responseStatus, 422);
        },
        json: (responseMessage) => {
          assert.equal(responseMessage.mensagem, messagePointDistance);
        }
      };
      validation.validation_post_pdv(body, res);
      done();
    });
  });

  describe('Test Success', () => {
    it('01 - Valid ID', () => {
      body.id = '1';
      body.tradingName = 'Teste';
      body.ownerName = 'Teste';
      body.document = '123456789101234';
      body.lng = '25.0000';
      body.lat = '49.0000';
      body.distanceType = 'KM';
      body.pointDistance = '2';
      let res = {
        status: (responseStatus) => {},
        json: (responseMessage) => {}
      };
      validation.validation_post_pdv(body, res);
      done();
    });
  });

});
