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
app.use("/v1/", SalesOrder)
app.use("/v1/", Customer)
app.use("/v1/", CustomerAddress)
app.use("/v1/", Product)
app.use("/v1/", PaymentMethod)

app.listen(process.env.APP_PORT, () => {
    console.log("Server Running .. ")
});