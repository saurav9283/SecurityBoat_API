import express from 'express';
import {
    addProduct,
    updateProduct,
    getProducts,
    deleteProduct,
} from '../controller/product.js'
import verifyToken from '../utils/verifyToken.js';
const router = express.Router()
router.get('/', getProducts).post('/', addProduct)
router.put('/:id',verifyToken,updateProduct).delete('/:id',verifyToken,deleteProduct)

export default router