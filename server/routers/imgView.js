import express from 'express';
import { createImgView,updateImgView } from '../controllers/imgView.js'
const router = express.Router();


router.post('/', createImgView );

router.post('/update', updateImgView );

export default router;