const {FullHttpResponse} = require('@wix/serverless-api');

hmodule.exports = functionsBuilder =>
  functionsBuilder
    .addWebFunction('GET', '/hello', async () => {
      return new FullHttpResponse({status: 204, body: {msg: 'Hello, World!'}});
    });
