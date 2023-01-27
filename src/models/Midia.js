import Sequelize, { Model } from 'sequelize';
import Aluno from './Aluno';
import app from '../config/app';

export default class Midia extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Error empty field',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Error empty field',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${app.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
  static associate() {
    this.belongsTo(Aluno, { foreignKey: 'aluno_id' });
  }
}
