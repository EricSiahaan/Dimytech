import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCustomerAdress = async (req, res) => {
    const { customer_id, address } = req.body
    try {
        const customerAdress = await prisma.customer_adress.create({
            data: {
                customer_id: customer_id,
                address: address
            }
        })

        res.status(201).json(customerAdress)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const getCustomerAdress = async (req, res) => {
    try {
        const response = await prisma.customer_adress.findMany({
            where: { deleted_at: null }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })

    }
}


export const getCustomerAdressbyId = async (req, res) => {
    try {
        const response = await prisma.customer_adress.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.massage });
    }
}

export const updateCustomerAddress = async (req, res) => {
    const { customer_id, address } = req.body
    try {
        const customerAddress = await prisma.customer_adress.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                customer_id: customer_id,
                address: address
            }

        })

        res.status(200).json(customerAddress)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

}

export const deleteCustomerAddress = async (req, res) => {

    try {
        const customerAdress = await prisma.customer_adress.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                deleted_at: new Date()
            }
        })

        res.status(200).json(customerAdress)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}