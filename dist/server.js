"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.APP_PORT;
const ip = '52.67.209.28';

_app2.default.listen(port, () => {
  console.log(`Porta ${port} OK - http://${ip}`);
});
