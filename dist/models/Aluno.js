"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _Midia = require('./Midia'); var _Midia2 = _interopRequireDefault(_Midia);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 21],
            msg: 'Nome precisa conter entre 5 a 21 caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 21],
            msg: 'Sobrenome precisa conter entre 5 a 21 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'email já cadastrado',
        },
        validate: {
          isEmail: { msg: 'Email precisa ser valido' },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: { msg: 'Altura precisa ser um número' },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: { msg: 'Peso precisa ser um número' },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: { msg: 'Idade precisa ser um número inteiro' },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate() {
    this.hasMany(_Midia2.default, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
