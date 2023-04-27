import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPaymentMethod = async (req, res) => {
    const { name, is_active } = req.body
    try {
        const product = await prisma.payment_method.create({
            data: {
                name: name,
                is_active: is_active
            }
        })

        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const getPaymentMethod = async (req, res) => {
    try {
        const response = await prisma.payment_method.findMany({
            where: { deleted_at: null }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })

    }
}


export const getPaymentMethodbyId = async (req, res) => {
    try {
        const response = await prisma.payment_method.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.massage });
    }
}

export const updatePaymentMethod = async (req, res) => {
    const { name, is_active } = req.body
    try {
        const payment = await prisma.payment_method.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: name,
                is_active: is_active
            }
        })

        res.status(200).json(payment)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

}

export const deletePaymentMethod = async (req, res) => {

    try {
        const payment = await prisma.payment_method.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                deleted_at: new Date()
            }
        })

        res.status(200).json(payment)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}