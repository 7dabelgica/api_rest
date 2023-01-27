"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    res.status(200).json('ok');
  }
}

exports. default = new HomeController();
