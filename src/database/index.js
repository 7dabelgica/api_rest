import Sequelize from 'sequelize';
import databaseconfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Midia from '../models/Midia';

const models = [Aluno, User, Midia];

const connection = new Sequelize(databaseconfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
