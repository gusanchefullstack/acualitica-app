import Site from "../database/sites.js";

const getAllSites = async () => {
  try {
    const allSites = await Site.getAllSites();
    return allSites;
  } catch (error) {
    throw error;
  }
};

const getOneSite = async (siteId) => {
  try {
    const site = await Site.getOneSite(siteId);
    return site;
  } catch (error) {
    throw error;
  }
};

const createNewSite = async (site) => {
  try {
    const createdSite = await Site.createNewSite(site);
    return createdSite;
  } catch (error) {
    throw error;
  }
};

const updateOneSite = async (siteId, changes) => {
  try {
    const siteUpdated = await Site.updateOneSite(siteId, changes);
    return siteUpdated;
  } catch (error) {
    throw error;
  }
};

const deleteOneSite = async (siteId) => {
  try {
    const deletedSite = await Site.deleteOneSite(siteId);
    return deletedSite;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllSites,
  getOneSite,
  createNewSite,
  updateOneSite,
  deleteOneSite,
};