import { Router } from 'express';
import LinkController from '../controllers/link.controller.js';

const router = Router();

router.post('/', LinkController.createLink);
router.get('/:alias', LinkController.getLink);

export default router;
