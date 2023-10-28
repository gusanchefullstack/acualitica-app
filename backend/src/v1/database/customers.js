import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCustomers = async () => {
  try {
    const allCustomers = await prisma.customer.findMany();
    return allCustomers;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getOneCustomer = async (customerId) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        id: customerId,
      },
    });
    return customer;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneCustomer = async (customerId, changes) => {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: {
        id: customerId,
      },
      data: {
        ...changes,
      },
    });
    return updatedCustomer;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewCustomer = async (newCustomer) => {
  try {
    const customer = await prisma.customer.create({
      data: {
        name: newCustomer.name,
        nit: newCustomer.nit,
        phone: newCustomer.phone,
        address: newCustomer.address,
        city: newCustomer.city,
        state: newCustomer.state,
        country: newCustomer.country,
      },
    });
    return customer;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneCustomer = async (customerId) => {
  try {
    const customerToDelete = await prisma.customer.delete({
      where: {
        id: customerId,
      },
    });
    return customerToDelete;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

export default {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
