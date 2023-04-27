import express from 'express'
import {
    createPaymentMethod,
    getPaymentMethod,
    getPaymentMethodbyId,
    updatePaymentMethod,
    deletePaymentMethod
} from "../controllers/paymentMethod.js"

const router = express.Router();



router.post('/paymentMethod', createPaymentMethod);
router.get('/paymentMethod', getPaymentMethod);
router.get('/paymentMethod', getPaymentMethodbyId);
router.put('/paymentMethod/:id', updatePaymentMethod);
router.delete('/paymentMethod/:id', deletePaymentMethod);


export default router;