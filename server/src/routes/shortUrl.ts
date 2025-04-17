import express from 'express';
import { createUrl, getAllUrls, getUrl } from '../controllers/shortUrl';

const router = express.Router();

router.post('/shortUrl', createUrl);

router.get('/shortUrl', getAllUrls);

router.get('/shortUrl/:id', getUrl);

export default router;