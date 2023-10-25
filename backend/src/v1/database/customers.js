import DB from "./db.json" assert { type: "json" };
import saveToDatabase from "./utilities.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCustomers = async () => {
  try {
    const allCustomers = await prisma.customer.findMany();
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getOneCustomer = async (customerId) => {
  try {
    // const customer = DB.customers.find(
    //   (customer) => customer.id === customerId
    // );
    const customer = await prisma.customer.findUnique({
      where: {
        id: customerId,
      },
    });
    // if (!customer) {
    //   throw {
    //     status: 400,
    //     message: `Can't find customer with the id '${customerId}'`,
    //   };
    // }
    return customer;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneCustomer = async (customerId, changes) => {
  try {
    const indexForUpdate = DB.customers.findIndex(
      (customer) => customer.id === customerId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find customer with the id '${customerId}'`,
      };
    }
    const updatedCustomer = {
      ...DB.customers[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.customers[indexForUpdate] = updatedCustomer;
    saveToDatabase(DB);
    return updatedCustomer;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewCustomer = async (newCustomer) => {
  const isAlreadyAdded =
    DB.customers.findIndex((customer) => customer.nit === newCustomer.nit) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Customer with the nit '${newCustomer.nit}' already exists`,
    };
  }
  try {
    DB.customers.push(newCustomer);
    saveToDatabase(DB);
    return newCustomer;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneCustomer = async (customerId) => {
  try {
    const indexForDelete = DB.customers.findIndex(
      (customer) => customer.id === customerId
    );
    if (indexForDelete === -1) {
      throw {
        status: 400,
        message: `Can't find customer with the id '${customerId}'`,
      };
    }
    const customerToDelete = DB.customers[indexForDelete];
    DB.customers.splice(indexForDelete, 1);
    saveToDatabase(DB);
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
