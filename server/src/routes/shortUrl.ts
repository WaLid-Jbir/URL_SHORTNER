import express from 'express';
import { createUrl } from '../controllers/shortUrl';

const router = express.Router();

router.post('/shortUrl', createUrl);

export default router;