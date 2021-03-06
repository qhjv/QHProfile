import express from 'express';
import { getProduct,createProduct,updateProduct, deleteProduct} from '../controllers/product.js'
const router = express.Router();

router.get('/', getProduct );

router.post('/', createProduct );

router.post('/update', updateProduct );

router.delete('/:id', deleteProduct );

export default router;