module.exports = functionsBuilder =>
  functionsBuilder
    .addWebFunction('GET', '/hello', async () => {
      return { hello: 'world' };
    });
