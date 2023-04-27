import express from 'express'
import {
    createProduct,
    getProduct,
    getProductbyId,
    updateProduct,
    deleteProduct
} from "../controllers/product.js"

const router = express.Router();



router.post('/product', createProduct);
router.get('/product', getProduct);
router.get('/product/:id', getProductbyId);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);


export default router;