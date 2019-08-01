module.exports = functionsBuilder =>
  functionsBuilder
    .addWebFunction('GET', '/hello', async () => {
      // return { hello: 'world' };
      return new FullHttpResponse({status: 204, body: {msg: 'Hello, World!'}});
    });
