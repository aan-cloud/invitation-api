import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

type Attendent = {
    name: string,
    address: string,
    message: string
}

export async function postAttend(data: Attendent) {
    if (!data) {
        throw new Error("Data is required!")
    }

    const attend = await prisma.attendent.create({
        data: {
            name: data.name,
            address: data.address,
            message: data.message
        }
    });

    return attend;
};

export async function getAllAttendents() {
    return await prisma.attendent.findMany({})
};