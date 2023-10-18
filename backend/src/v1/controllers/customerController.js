import customerService from "../services/customerService.js";

const getAllCustomers = (req, res) => {
  const allCustomers = customerService.getAllCustomers();
  res.send({ status: "Ok", items: allCustomers.length, data: allCustomers });
};

const getOneCustomer = (req, res) => {
  const { customerId } = req.params;
  if (!customerId) {
    return;
  }
  const customer = customerService.getOneCustomer(customerId);
  res.send({ status: "Ok", data: customer });
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
  const { customerId } = req.params;
  const { body } = req;
  if (!customerId) {
    return;
  }
  const updatedCustomer = customerService.updateOneCustomer(customerId, body);
  res.send({ status: "Ok", data: updatedCustomer });
};

const deleteOneCustomer = (req, res) => {
  const { customerId } = req.params;
  if (!customerId) {
    return;
  }
  const deletedCustomer = customerService.deleteOneCustomer(customerId);
  res.send({ status: "Ok", data: deletedCustomer});
};

export default {
  createNewCustomer,
  getAllCustomers,
  getOneCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
