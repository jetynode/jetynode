var { Exception, Env, Logger, Response } = require("@jetynode/framework");

const middleware = function (req, res, next) {
  (global._req = req),
    (global._res = res),
    (_Exception = Exception),
    (_Env = Env),
    (_Logger = Logger),
    (_Response = Response),
    next();
};
module.exports = middleware;
