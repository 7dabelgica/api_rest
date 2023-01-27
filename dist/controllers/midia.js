"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _Midia = require('../models/Midia'); var _Midia2 = _interopRequireDefault(_Midia);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);

const upload = _multer2.default.call(void 0, _multer4.default).single('midia');

class MidiaController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: err.code,
        });
      }
      try {
        const { filename, originalname } = req.file;
        const { aluno_id } = req.body;

        const midia = await _Midia2.default.create({ filename, originalname, aluno_id });

        return res.json(midia);
      } catch (e) {
        return res.json({
          errors: 'O aluno não existe',
        });
      }
    });
  }
}

exports. default = new MidiaController();
