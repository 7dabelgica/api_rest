"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _user = require('../controllers/user'); var _user2 = _interopRequireDefault(_user);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express2.default)();

router.get('/', _user2.default.index);
router.get('/', _user2.default.show);

router.post('/', _user2.default.store);
router.put('/', _loginRequired2.default, _user2.default.update);
router.delete('/', _loginRequired2.default, _user2.default.delete);

exports. default = router;
