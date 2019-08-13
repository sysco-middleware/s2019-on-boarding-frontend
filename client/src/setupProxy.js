const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/engine-rest/', { target: 'http://camunda:8080' }));
  app.use(proxy('/admin', { target: 'http://worker:5000' }));
  app.use(proxy('/employe', { target: 'http://worker:5000' }));
};

