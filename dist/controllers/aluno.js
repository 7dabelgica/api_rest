"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Midia = require('../models/Midia'); var _Midia2 = _interopRequireDefault(_Midia);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'peso', 'altura', 'idade', 'email'],
      order: [['id', 'DESC'], [_Midia2.default, 'id', 'DESC']],
      include: {
        model: _Midia2.default,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['missing ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'peso', 'altura', 'idade', 'email'],
        order: [['id', 'DESC'], [_Midia2.default, 'id', 'DESC']],
        include: {
          model: _Midia2.default,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(401).json({
          errors: ['aluno não existe'],
        });
      }

      const { nome, email, peso, altura, idade } = aluno;

      return res.json({ nome, email, peso, altura, idade });
    } catch (e) {
      return res.status(401).json({
        errors: e.error.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['missing ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: ['aluno não existe'],
        });
      }

      await aluno.destroy();
      return res.json('Aluno deletado com sucesso');
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['missing ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: ['aluno não existe'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      const { nome, email, peso, altura, idade } = alunoAtualizado;

      return res.json({ nome, email, peso, altura, idade });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);

      const { id, nome, email, peso, altura, idade } = aluno;

      return res.json({ id, nome, email, peso, altura, idade });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();

