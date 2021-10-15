import express from 'express';
import { getProduct,createProduct,updateProduct } from '../controllers/product.js'
const router = express.Router();

router.get('/', getProduct );

router.post('/', createProduct );

router.post('/update', updateProduct );

export default router;