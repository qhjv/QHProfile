import express from 'express';
import { createImgDemo,updateImgDemo } from '../controllers/imgDemo.js'
const router = express.Router();


router.post('/', createImgDemo );

router.post('/update', updateImgDemo );


export default router;