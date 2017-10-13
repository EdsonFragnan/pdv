'use strict';

module.exports = () => {
  const mongoose = require('mongoose');
  let uristring = '',
      mensagem = '',
      port = process.env.PORT || 3000;
  if (port === 3000) {
    uristring =
      process.env.MONGOLAB_URI ||
      process.env.MONGOHQ_URL ||
      'mongodb://127.0.0.1:27017/mydb_pdv';
  } else {
    uristring =
      process.env.MONGOLAB_URI ||
      process.env.MONGOHQ_URL ||
      'mongodb://mydb_pdv:123456@ds111565.mlab.com:11565/heroku_rth83m55';
  }
  mongoose.connect(uristring, { useMongoClient: true }, (err, res) => {
    if (err) {
      console.log('Bad Connection: working in - ' + uristring + '. ' + err);
    } else {
      console.log('Connection Success: working in - ' + uristring);
    }
  });
};
