import express from 'express'
import {
    createCustomerAdress,
    getCustomerAdress,
    getCustomerAdressbyId,
    updateCustomerAddress,
    deleteCustomerAddress
} from "../controllers/customerAdress.js"

const router = express.Router();


a
router.post('/customeraddress', createCustomerAdress);
router.get('/customeraddress', getCustomerAdress);
router.get('/customeraddress/:id', getCustomerAdressbyId);
router.put('/customeraddress/:id', updateCustomerAddress);
router.delete('/customeraddress/:id', deleteCustomerAddress);


export default router;