import Express from 'express';
import home from '../controllers/home';

const router = new Express();

router.get('/', home.index);

export default router;
