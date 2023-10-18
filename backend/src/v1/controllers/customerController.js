import customerService from "../services/customerService.js";

const getAllCustomers = (req, res) => {
  const allCustomers = customerService.getAllCustomers();
  res.send({ status: "Ok", data: allCustomers });
};

const getOneCustomer = (req, res) => {
  const customer = customerService.getOneCustomer();
  res.send("Get one customer from controller");
};

const createNewCustomer = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.nit ||
    !body.phone ||
    !body.address ||
    !body.city ||
    !body.state ||
    !body.country
  ) {
    return;
  }
  const newCustomer = {
    name: body.name,
    nit: body.nit,
    phone: body.phone,
    address: body.address,
    city: body.city,
    state: body.state,
    country: body.country,
  };
  const createdCustomer = customerService.createNewCustomer(newCustomer);
  res.status(201).send({ status: "Ok", data: createdCustomer });
};

const updateOneCustomer = (req, res) => {
  const updatedCustomer = customerService.updateOneCustomer();
  res.send("Update one customer from controller");
};

const deleteOneCustomer = (req, res) => {
  const deletedCustomer = customerService.deleteOneCustomer();
  res.send("Delete one customer from controller");
};

export default {
  createNewCustomer,
  getAllCustomers,
  getOneCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
