"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
// import helmet from 'helmet';
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
var _aluno = require('./routes/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _midia = require('./routes/midia'); var _midia2 = _interopRequireDefault(_midia);
require('./database');

_dotenv2.default.config();

const whitelist = [
  'http://52.67.209.28',
  'http://localhost:3002',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || (!origin)) return callback(null, true);
    return callback(new Error('Cors not authorized'));
  },
};

// const corsOptions = {
//   origin: 'http://52.67.209.28',
//   credentials: true,
//   optionSuccessStatus: 200,
// };

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    // this.app.use(helmet());
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/users/', _user2.default);
    this.app.use('/tokens/', _token2.default);
    this.app.use('/alunos/', _aluno2.default);
    this.app.use('/midias/', _midia2.default);
  }
}

exports. default = new App().app;
