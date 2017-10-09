const assert = require('assert');
const model = require('../../models/pdv.js');
const mongoose = require('mongoose');

describe('Test validation get one PDV', (done) => {

  const dataMock = {
    'id': 1,
    'tradingName': 'Teste',
    'ownerName': 'Teste',
    'document': '12345678901234',
    'coverageArea': {
      'type': 'Teste',
      'coordinates': []
    },
    'address': {
      'type': 'Teste',
      'coordinates': []
    }
  };

  describe('01 - Teste model - findAll', () => {
    it('01 - Error', () => {
      let errorMock = 'Error';
      model.findAll(() => {
        mongoose.find({}, (error) => {
          assert.equal(error, errorMock);
          done();
        });
      });
    });

    it('02 - Success', () => {
      let dataMock = 'Success';
      let error = null;
      model.findAll(() => {
        mongoose.find({}, (error) => {
          assert.equal(data, dataMock);
          done();
        });
      });
    });
  });

  describe('02 - Teste model - findOne', () => {
    it('01 - Error', () => {
      let id = 1;
      let errorMock = 'Error';
      model.findOne(id, (callback) => {
        mongoose.findOne(id, (error) => {
          assert.equal(error, errorMock);
          done();
        });
      });
    });

    it('02 - Success', () => {
      let id = 1;
      let dataMock = 'Success';
      let error = null;
      model.findOne(id, (callback) => {
        mongoose.findOne(id, (error, data) => {
          assert.equal(data, dataMock);
          done();
        });
      });
    });
  });

  describe('03 - Teste model - Insert PDV', () => {
    it('01 - Error', () => {
      let errorMock = 'Error';
      model.postPDV({}, (error, data) => {
        mongoose.save(dataMock, (error, data) => {
          assert.equal(data, dataMock);
          done();
        });
      });
    });

    it('02 - Success', () => {
      let error = null;
      model.postPDV(dataMock, (error, data) => {
        mongoose.save(dataMock, (error, data) => {
          assert.equal(data, dataMock);
          done();
        });
      });
    });
  });

});
