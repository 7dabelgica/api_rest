import Express from 'express';
import loginRequired from '../middlewares/loginRequired';

import midia from '../controllers/midia';

const router = new Express();

router.post('/', loginRequired, midia.store);

export default router;
