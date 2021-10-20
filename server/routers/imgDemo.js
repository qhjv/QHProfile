import express from 'express';
// import { getProduct,createProduct,updateProduct, deleteProduct} from '../controllers/product.js'
import { createImgDemo } from '../controllers/imgDemo.js'
const router = express.Router();

// router.get('/', getImgDemo );

router.post('/', createImgDemo );

// router.post('/update', updateProduct );

// router.delete('/:id', deleteProduct );

export default router;