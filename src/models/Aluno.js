import Sequelize, { Model } from 'sequelize';
import Midia from './Midia';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 21],
            msg: 'Nome precisa conter entre 5 a 21 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 21],
            msg: 'Sobrenome precisa conter entre 5 a 21 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'email já cadastrado',
        },
        validate: {
          isEmail: { msg: 'Email precisa ser valido' },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: { msg: 'Altura precisa ser um número' },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: { msg: 'Peso precisa ser um número' },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
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
    this.hasMany(Midia, { foreignKey: 'aluno_id' });
  }
}
