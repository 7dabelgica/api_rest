"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _token = require('../controllers/token'); var _token2 = _interopRequireDefault(_token);

const router = new (0, _express2.default)();

router.post('/', _token2.default.store);

exports. default = router;
