// import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    res.status(200).json('ok');
  }
}

export default new HomeController();
