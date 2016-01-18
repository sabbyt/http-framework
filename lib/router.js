var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {},
    'PROBLEM': function(req, res) {
      res.writeHead(404, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({msg: 'Page not found'}));
      return res.end();
    }
  };
};

Router.prototype.method = function(method, url, callback) {
  if(!this.routes[method][url]) return 'Method not available - choose GET, POST, PUT, PATCH or DELETE';
  this.routes[method][url] = callback;
};

Router.prototype.route = function(options) {
  return (req, res, filepath) => {
    var routeFunction = this.routes[req.method][req.url] || this.routes.PROBLEM;
    routeFunction(req, res);
  };
};
