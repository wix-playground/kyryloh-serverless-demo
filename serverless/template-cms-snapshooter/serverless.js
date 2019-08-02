const {FullHttpResponse} = require('@wix/serverless-api');

module.exports = functionsBuilder =>
  functionsBuilder
    .withContextPath('template-cms-snapshooter')
    .addWebFunction('GET', '/hello', async () => {
      return new FullHttpResponse({status: 204, body: {msg: 'Hello, World!'}});
    });
