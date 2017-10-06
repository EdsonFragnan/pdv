module.exports = app => {
  const port = process.env.PORT || 3000;
  app.listen(port, (porta) => {
    console.log('PDV rodando na porta: ' + 3000);
  });
}
