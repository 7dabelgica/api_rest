"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _midia = require('../controllers/midia'); var _midia2 = _interopRequireDefault(_midia);

const router = new (0, _express2.default)();

router.post('/', _loginRequired2.default, _midia2.default.store);

exports. default = router;
