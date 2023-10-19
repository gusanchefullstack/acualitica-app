import customerService from "../services/customerService.js";

const getAllCustomers = (req, res) => {
  try {
    const allCustomers = customerService.getAllCustomers();
    res.send({ status: "Ok", items: allCustomers.length, data: allCustomers });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
};

const getOneCustomer = (req, res) => {
  const { customerId } = req.params;
  if (!customerId) {
    res.status(400).send({
      status: "Failed",
      data: { error: "Parameter customerId cannot be empty" },
    });
  }
  try {
    const customer = customerService.getOneCustomer(customerId);
    res.send({ status: "Ok", data: customer });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
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
    res.status(400).send({
      status: "Failed",
      data: {
        error:
          "One of the following fields is missing: name, nit, phone, address, city, state or country",
      },
    });
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
  try {
    const createdCustomer = customerService.createNewCustomer(newCustomer);
    res.status(201).send({ status: "Ok", data: createdCustomer });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
};

const updateOneCustomer = (req, res) => {
  const { customerId } = req.params;
  const { body } = req;
  if (!customerId) {
    res.status(400).send({
      status: "Failed",
      data: { error: "Parameter customerId cannot be empty" },
    });
  }
  try {
    const updatedCustomer = customerService.updateOneCustomer(customerId, body);
    res.send({ status: "Ok", data: updatedCustomer });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
};

const deleteOneCustomer = (req, res) => {
  const { customerId } = req.params;
  if (!customerId) {
    res.status(400).send({
      status: "Failed",
      data: { error: "Parameter customerId cannot be empty" },
    });
  }
  try {
    const deletedCustomer = customerService.deleteOneCustomer(customerId);
    res.send({ status: "Ok", data: deletedCustomer });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
};

export default {
  createNewCustomer,
  getAllCustomers,
  getOneCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
