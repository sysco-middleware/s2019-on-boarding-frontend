const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/engine-rest/', { target: 'http://camunda:8080' }));
  app.use(proxy('/api/v1/getEmployes', { target: 'http://worker:5000' }));
  app.use(proxy('/api/v1/checkEmployes', { target: 'http://worker:5000' }));
};

