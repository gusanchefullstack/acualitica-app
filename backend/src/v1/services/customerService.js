import Customer from "../database/customers.js";
import { v4 as uuidv4 } from "uuid";

const getAllCustomers = () => {
  const allCustomers = Customer.getAllCustomers();
  return allCustomers;
};

const getOneCustomer = (customerId) => {
  const customer = Customer.getOneCustomer(customerId);
  return customer;
};

const createNewCustomer = (customer) => {
  const customerToInsert = {
    ...customer,
    id: uuidv4(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdCustomer = Customer.createNewCustomer(customerToInsert);
  return createdCustomer;
};

const updateOneCustomer = (customerId, changes) => {
  const customerUpdated = Customer.updateOneCustomer(customerId, changes);
  return customerUpdated;
};

const deleteOneCustomer = (customerId) => {
  const deletedCustomer = Customer.deleteOneCustomer(customerId);
  return deletedCustomer;
};

export default {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
