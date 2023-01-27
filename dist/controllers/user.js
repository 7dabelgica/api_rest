"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class Usercontroller {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      res.status(200).json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const users = await _User2.default.findByPk(req.userId);
      if (!users) {
        return res.status(400).json({
          erros: ['Usuário não existe'],
        });
      }
      const { id, nome, email } = users;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const users = await _User2.default.findByPk(req.userId);
      if (!users) {
        return res.status(400).json({
          erros: ['Usuário não existe'],
        });
      }

      const NovoUser = await users.update(req.body);
      const { id, nome, email } = NovoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const users = await _User2.default.findByPk(req.userId);
      if (!users) {
        return res.status(400).json({
          erros: ['Usuário não existe'],
        });
      }

      await users.destroy();
      return res.json({
        message: 'usuário deletado',
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new Usercontroller();
