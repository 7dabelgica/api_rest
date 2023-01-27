import Express from 'express';
import tokenCtrl from '../controllers/token';

const router = new Express();

router.post('/', tokenCtrl.store);

export default router;
