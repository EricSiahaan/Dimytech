import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import SalesOrder from './routes/salesOrder.js';
import Customer from './routes/customer.js';
import CustomerAddress from './routes/customerAddress.js';
import Product from './routes/product.js';
import PaymentMethod from './routes/paymentMethod.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(SalesOrder)
app.use(Customer)
app.use(CustomerAddress)
app.use(Product)
app.use(PaymentMethod)

app.listen(process.env.APP_PORT, () => {
    console.log("Server Running .. ")
});