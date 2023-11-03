import siteService from "../services/siteService.js";

const getAllSites = async (req, res) => {
  try {
    const allSites = await siteService.getAllSites();
    res.json({ status: "Ok", data: allSites });
  } catch (error) {
    res.json({ status: "Failed", data: { error: error?.message || error } });
  }
};

const getOneSite = async (req, res) => {
  const { siteId } = req.params;
  if (!siteId) {
    res.json({
      status: "Failed",
      data: { error: "Parameter siteId cannot be empty" },
    });
  }
  try {
    const site = await siteService.getOneSite(siteId);
    res.json({ status: "Ok", data: site });
  } catch (error) {
    res.json({ status: "Failed", data: { error: error?.message || error } });
  }
};

const createNewSite = async (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.address ||
    !body.city ||
    !body.state ||
    !body.country ||
    !body.customerId
  ) {
    res.json({
      status: "Failed",
      data: {
        error:
          "One of the following fields is missing: name, address, city, state, country or customerId",
      },
    });
  }
  const newSite = {
    name: body.name,
    address: body.address,
    city: body.city,
    state: body.state,
    country: body.country,
    customerId: body.customerId,
  };
  try {
    const createdSite = await siteService.createNewSite(newSite);
    res.json({ status: "Ok", data: createdSite });
  } catch (error) {
    res.json({ status: "Failed", data: { error: error?.message || error } });
  }
};

const updateOneSite = async (req, res) => {
  const { siteId } = req.params;
  const { body } = req;
  if (!siteId) {
    res.json({
      status: "Failed",
      data: { error: "Parameter siteId cannot be empty" },
    });
  }
  try {
    const updatedSite = await siteService.updateOneSite(siteId, body);
    res.json({ status: "Ok", data: updatedSite });
  } catch (error) {
    res.json({ status: "Failed", data: { error: error?.message || error } });
  }
};

const deleteOneSite = async (req, res) => {
  const { siteId } = req.params;
  if (!siteId) {
    res.json({
      status: "Failed",
      data: { error: "Parameter siteId cannot be empty" },
    });
  }
  try {
    const deletedSite = await siteService.deleteOneSite(siteId);
    res.json({ status: "Ok", data: deletedSite });
  } catch (error) {
    res.json({ status: "Failed", data: { error: error?.message || error } });
  }
};

export default {
  createNewSite,
  getAllSites,
  getOneSite,
  updateOneSite,
  deleteOneSite,
};
