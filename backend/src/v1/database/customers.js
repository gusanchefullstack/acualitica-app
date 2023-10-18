import DB from "./db.json" assert { type: "json" };
import saveToDatabase from "./utilities.js";

const getAllCustomers = () => {
  return DB.customers;
};

const getOneCustomer = (customerId) => {
  const customer = DB.customers.find((customer) => customer.id === customerId);
  if (!customer) {
    return;
  }
  return customer;
};

const updateOneCustomer = (customerId, changes) => {
  const indexForUpdate = DB.customers.findIndex(
    (customer) => customer.id === customerId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedCustomer = {
    ...DB.customers[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  DB.customers[indexForUpdate] = updatedCustomer;
  saveToDatabase(DB);
  return updatedCustomer;
};

const createNewCustomer = (newCustomer) => {
  const isAlreadyAdded =
    DB.customers.findIndex((customer) => customer.name === newCustomer.name) >
    -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.customers.push(newCustomer);
  saveToDatabase(DB);
  return newCustomer;
};

const deleteOneCustomer = (customerId) => {
  const indexForDelete = DB.customers.findIndex(
    (customer) => customer.id === customerId
  );
  if (indexForDelete === -1) {
    return;
  }
  const customerToDelete = DB.customers[indexForDelete];
  DB.customers.splice(indexForDelete, 1);
  saveToDatabase(DB);
  return customerToDelete;
};

export default {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
