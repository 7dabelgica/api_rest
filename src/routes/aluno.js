import Express from 'express';
import aluno from '../controllers/aluno';
import loginRequired from '../middlewares/loginRequired';

const router = new Express();

router.get('/', aluno.index);
router.post('/', loginRequired, aluno.store);
router.get('/:id', aluno.show);
router.delete('/:id', loginRequired, aluno.delete);
router.put('/:id', loginRequired, aluno.update);

export default router;
