import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const createSalesOrder = async (req, res) => {
    const { id_product, id_payment, customer_id } = req.body
    try {
        const salesOrder = await prisma.sales_order.create({
            data: {
                id_product: id_product,
                id_payment: id_payment,
                customer_id: customer_id
            }
        })

        res.status(201).json(salesOrder)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const getSalesOrder = async (req, res) => {
    try {
        const response = await prisma.sales_order.findMany({
            // where: { deleted_at: null }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })

    }
}


export const getSalesOrderbyId = async (req, res) => {
    try {
        const response = await prisma.sales_order.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.massage });
    }
}

export const updateSalesOrder = async (req, res) => {
    const { id_product, id_payment, customer_id } = req.body
    try {
        const salesOrder = await prisma.sales_order.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                id_product: id_product,
                id_payment: id_payment,
                customer_id: customer_id
            }
        })

        res.status(200).json(salesOrder)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

}


export const deleteSalesOrder = async (req, res) => {
    try {
        const salesOrder = await prisma.sales_order.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                deleted_at: new Date()
            }
        })

        res.status(200).json(salesOrder)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}