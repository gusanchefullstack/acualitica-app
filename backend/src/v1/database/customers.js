import DB from "./db.json" assert { type: "json" };
import saveToDatabase from "./utilities.js";

const getAllCustomers = () => {
  return DB;
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

export default {
  getAllCustomers,
  createNewCustomer,
};
