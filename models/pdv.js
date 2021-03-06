'use strict';

const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      post_pdv = new Schema({
          id: {type: Number, required: true, unique: true},
          tradingName: String,
          ownerName: String,
          document: {type: String, required: true, unique: true},
          coverageArea: {
            type: {type: String},
            coordinates: []
          },
          address: {
            type: {type: String},
            coordinates: []
          }
      });

module.exports = {

  findPdv: (request, callback) => {
    const get_pdv = mongoose.model('Pdv', post_pdv);
    get_pdv.find(request, (error, data) => {
        if (error) {
          callback(error, null)
        } else {
          callback(null, data)
        }
    });
  },

  findOne: (request, callback) => {
    const getOne_pdv = mongoose.model('Pdv', post_pdv);
    getOne_pdv.findOne(request, (error, data) => {
        if (error) {
          callback(error, null)
        } else {
          callback(null, data)
        }
    });
  },

  postPDV: (pdv, callback) => {
    const Insert_pdv = mongoose.model('Pdv', post_pdv);
    var pdv_insert = new Insert_pdv(pdv);
    pdv_insert.save(pdv, (error, data) => {
        if (error) {
          callback(error, null)
        } else {
          callback(null, data)
        }
    });
  }
}
