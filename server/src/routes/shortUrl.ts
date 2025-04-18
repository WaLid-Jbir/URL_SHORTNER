import express from 'express';
import { 
    createUrl, 
    deleteUrl, 
    getAllUrls, 
    getUrl 
} from '../controllers/shortUrl';

const router = express.Router();

router.post('/shortUrl', createUrl);

router.get('/shortUrl', getAllUrls);

router.get('/shortUrl/:id', getUrl);

router.delete('/shortUrl/:id', deleteUrl);

export default router;