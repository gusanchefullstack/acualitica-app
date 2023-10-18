import Customer from "../database/customers.js";

const getAllCustomers = () => {
  const allCustomers = Customer.getAllCustomers();
  return allCustomers;
};

const getOneCustomer = () => {
  return;
};

const createNewCustomer = (customer) => {
  const createdCustomer = Customer.createNewCustomer(customer);
  return createdCustomer;
};

const updateOneCustomer = () => {
  return;
};

const deleteOneCustomer = () => {
  return;
};

export default {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
