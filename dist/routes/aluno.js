"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _aluno = require('../controllers/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express2.default)();

router.get('/', _aluno2.default.index);
router.post('/', _loginRequired2.default, _aluno2.default.store);
router.get('/:id', _aluno2.default.show);
router.delete('/:id', _loginRequired2.default, _aluno2.default.delete);
router.put('/:id', _loginRequired2.default, _aluno2.default.update);

exports. default = router;
