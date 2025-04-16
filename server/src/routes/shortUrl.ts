import express from 'express';
import { createUrl, getAllUrls } from '../controllers/shortUrl';

const router = express.Router();

router.post('/shortUrl', createUrl);

router.get('/shortUrl', getAllUrls);

export default router;