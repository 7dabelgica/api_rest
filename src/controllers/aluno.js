import Aluno from '../models/Aluno';
import Midia from '../models/Midia';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'peso', 'altura', 'idade', 'email'],
      order: [['id', 'DESC'], [Midia, 'id', 'DESC']],
      include: {
        model: Midia,
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

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'peso', 'altura', 'idade', 'email'],
        order: [['id', 'DESC'], [Midia, 'id', 'DESC']],
        include: {
          model: Midia,
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

      const aluno = await Aluno.findByPk(id);

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

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: ['aluno não existe'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      const { nome, sobrenome, email, peso, altura, idade } = alunoAtualizado;

      return res.json({ nome, sobrenome, email, peso, altura, idade });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      const { id, nome, email, peso, altura, idade } = aluno;

      return res.json({ id, nome, email, peso, altura, idade });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();

