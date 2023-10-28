import Customer from "../database/customers.js";

const getAllCustomers = async () => {
  try {
    const allCustomers = await Customer.getAllCustomers();
    return allCustomers;
  } catch (error) {
    throw error;
  }
};

const getOneCustomer = async (customerId) => {
  try {
    const customer = await Customer.getOneCustomer(customerId);
    return customer;
  } catch (error) {
    throw error;
  }
};

const createNewCustomer = async (customer) => {
  try {
    const createdCustomer = await Customer.createNewCustomer(customer);
    return createdCustomer;
  } catch (error) {
    throw error;
  }
};

const updateOneCustomer = async (customerId, changes) => {
  try {
    const customerUpdated = await Customer.updateOneCustomer(customerId, changes);
    return customerUpdated;
  } catch (error) {
    throw error;
  }
};

const deleteOneCustomer = async (customerId) => {
  try {
    const deletedCustomer = await Customer.deleteOneCustomer(customerId);
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
