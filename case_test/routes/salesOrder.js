
import express from 'express'
import {
    createSalesOrder,
    getSalesOrder,
    getSalesOrderbyId,
    updateSalesOrder,
    deleteSalesOrder
} from "../controllers/salesOrder.js"

const router = express.Router();



router.post('/salesOrder', createSalesOrder);
router.get('/salesOrder', getSalesOrder);
router.get('/salesOrder/:id', getSalesOrderbyId);
router.put('/salesOrder/:id', updateSalesOrder);
router.delete('/salesOrder/:id', deleteSalesOrder);


export default router;

