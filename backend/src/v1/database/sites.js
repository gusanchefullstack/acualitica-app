import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllSites = async () => {
  try {
    const allSites = await prisma.site.findMany();
    return allSites;
  } catch (error) {
    throw error;
  }
};

const getOneSite = async (siteId) => {
  try {
    const site = await prisma.site.findUnique({
      where: {
        id: siteId,
      },
    });
    return site;
  } catch (error) {
    throw error;
  }
};

const updateOneSite = async (siteId, changes) => {
  try {
    const updatedSite = await prisma.site.update({
      where: {
        id: siteId,
      },
      data: {
        ...changes,
      },
    });
    return updatedSite;
  } catch (error) {
    throw error;
  }
};

const createNewSite = async (newSite) => {
  try {
    const site = await prisma.site.create({
      data: {
        name: newSite.name,
        address: newSite.address,
        city: newSite.city,
        state: newSite.state,
        country: newSite.country,
        customerId: newSite.customerId,
      },
    });
    return site;
  } catch (error) {
    throw error;
  }
};

const deleteOneSite = async (siteId) => {
  try {
    const siteToDelete = await prisma.site.delete({
      where: {
        id: siteId,
      },
    });
    return siteToDelete;
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
