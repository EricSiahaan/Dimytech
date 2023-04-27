import express from 'express'
import {
    createCustomer,
    getCustomer,
    getCustmerbyId,
    updateCustomer,
    deleteCustomer
} from "../controllers/customer.js"

const router = express.Router();



router.post('/customer', createCustomer);
router.get('/customer', getCustomer);
router.get('/customer/:id', getCustmerbyId);
router.put('/customer/:id', updateCustomer);
router.delete('/customer/:id', deleteCustomer);


export default router;