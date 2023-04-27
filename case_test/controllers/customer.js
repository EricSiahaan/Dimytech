import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCustomer = async (req, res) => {
    const { customer_name } = req.body
    try {
        const customer = await prisma.customer.create({
            data: {
                customer_name: customer_name
            }
        })

        res.status(201).json(customer)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const getCustomer = async (req, res) => {
    try {
        const response = await prisma.customer.findMany({
            where: { deleted_at: null }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })

    }
}


export const getCustmerbyId = async (req, res) => {
    try {
        const response = await prisma.customer.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.massage });
    }
}

export const updateCustomer = async (req, res) => {
    const { customer_name } = req.body
    try {
        const customer = await prisma.customer.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                customer_name: customer_name
            }
        })

        res.status(200).json(customer)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

}

export const deleteCustomer = async (req, res) => {

    try {
        const customer = await prisma.customer.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                deleted_at: new Date()
            }
        })

        res.status(200).json(customer)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}