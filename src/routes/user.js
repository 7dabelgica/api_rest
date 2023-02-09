import Express from 'express';
import userCtrl from '../controllers/user';
import loginRequired from '../middlewares/loginRequired';

const router = new Express();

// router.get('/', userCtrl.index);
// router.get('/', userCtrl.show);

router.post('/', userCtrl.store);
router.put('/', loginRequired, userCtrl.update);
router.delete('/', loginRequired, userCtrl.delete);

export default router;
