'use strict';

module.exports = app => {
  let port = process.env.PORT || 3000;
  app.listen(port, (porta) => {
    console.log('PDV working in port: ' + port);
  });
}
