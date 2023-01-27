import multer from 'multer';
import Midia from '../models/Midia';
import multerconfig from '../config/multer';

const upload = multer(multerconfig).single('midia');

class MidiaController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: err.code,
        });
      }
      try {
        const { filename, originalname } = req.file;
        const { aluno_id } = req.body;

        const midia = await Midia.create({ filename, originalname, aluno_id });

        return res.json(midia);
      } catch (e) {
        return res.json({
          errors: 'O aluno não existe',
        });
      }
    });
  }
}

export default new MidiaController();
