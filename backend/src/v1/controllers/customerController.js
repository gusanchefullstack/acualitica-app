import customerService from "../services/customerService.js";

const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await customerService.getAllCustomers();
    res.json({ status: "Ok", data: allCustomers });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "Failed", data: { error: error?.message || error } });
  }
};

const getOneCustomer = async (req, res) => {
  const { customerId } = req.params;
  if (!customerId) {
    res.status(400).json({
      status: "Failed",
      data: { error: "Parameter customerId cannot be empty" },
    });
  }
  try {
    const customer = await customerService.getOneCustomer(customerId);
    res.json({ status: "Ok", data: customer });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "Failed", data: { error: error?.message || error } });
  }
};

const createNewCustomer = async (req, res) => {
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
    res.status(400).json({
      status: "Failed",
      data: {
        error:
          "One of the following fields is missing: name, nit, phone, address, city, state or country",
      },
    });
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
    const createdCustomer = await customerService.createNewCustomer(newCustomer);
    res.status(201).json({ status: "Ok", data: createdCustomer });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "Failed", data: { error: error?.message || error } });
  }
};

const updateOneCustomer = async (req, res) => {
  const { customerId } = req.params;
  const { body } = req;
  if (!customerId) {
    res.status(400).json({
      status: "Failed",
      data: { error: "Parameter customerId cannot be empty" },
    });
  }
  try {
    const updatedCustomer = await customerService.updateOneCustomer(customerId, body);
    res.json({ status: "Ok", data: updatedCustomer });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "Failed", data: { error: error?.message || error } });
  }
};

const deleteOneCustomer = async (req, res) => {
  const { customerId } = req.params;
  if (!customerId) {
    res.status(400).json({
      status: "Failed",
      data: { error: "Parameter customerId cannot be empty" },
    });
  }
  try {
    const deletedCustomer = await customerService.deleteOneCustomer(customerId);
    res.json({ status: "Ok", data: deletedCustomer });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "Failed", data: { error: error?.message || error } });
  }
};

export default {
  createNewCustomer,
  getAllCustomers,
  getOneCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
