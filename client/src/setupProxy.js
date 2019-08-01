const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/camunda', { target: 'http://camunda:8080', changeOrigin: true, pathRewrite: { '^/camunda/' : '/'} }));
  app.use(proxy('/node', { target: 'http://worker:8000/', changeOrigin: true, pathRewrite: { '^/node/' : '/'} }));
};