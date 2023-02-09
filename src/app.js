import express from 'express';
import cors from 'cors';
// import helmet from 'helmet';
import dotenv from 'dotenv';
import { resolve } from 'path';
import homeRouter from './routes/home';
import userRoutes from './routes/user';
import tokenRoutes from './routes/token';
import alunoRoutes from './routes/aluno';
import midiaRoutes from './routes/midia';
import './database';

dotenv.config();

const whitelist = [
  'http://52.67.209.28',
  'http://localhost:3002',
  'http://localhost:3000',
];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1 || (!origin)) return callback(null, true);
//     return callback(new Error('Cors notttt authorized'));
//   },
// };

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // this.app.use(helmet());
    this.app.use(cors(corsOptions));
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/midias/', midiaRoutes);
  }
}

export default new App().app;
