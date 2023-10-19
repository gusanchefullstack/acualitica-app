import Customer from "../database/customers.js";
import { v4 as uuidv4 } from "uuid";

const getAllCustomers = () => {
  try {
    const allCustomers = Customer.getAllCustomers();
    return allCustomers;
  } catch (error) {
    throw error;
  }
};

const getOneCustomer = (customerId) => {
  try {
    const customer = Customer.getOneCustomer(customerId);
    return customer;
  } catch (error) {
    throw error;
  }
};

const createNewCustomer = (customer) => {
  const customerToInsert = {
    ...customer,
    id: uuidv4(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdCustomer = Customer.createNewCustomer(customerToInsert);
    return createdCustomer;
  } catch (error) {
    throw error;
  }
};

const updateOneCustomer = (customerId, changes) => {
  try {
    const customerUpdated = Customer.updateOneCustomer(customerId, changes);
    return customerUpdated;
  } catch (error) {
    throw error;
  }
};

const deleteOneCustomer = (customerId) => {
  try {
    const deletedCustomer = Customer.deleteOneCustomer(customerId);
    return deletedCustomer;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
