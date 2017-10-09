'use strict';

const mongoose = require('mongoose');
module.exports = () => {
  let uristring = '';
  let mensagem = '';
  const port = process.env.PORT || 3000;
  if (port === 3000) {
    mensagem = 'RODANDO EM DEV!';
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
      console.log ('Bad Connection: ' + mensagem + ' - ' + uristring + '. ' + err);
    } else {
      console.log ('Connection Success: ' + mensagem + ' - ' + uristring);
    }
  });
};
