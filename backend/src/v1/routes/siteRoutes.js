import express from "express";
import siteController from "../controllers/siteController.js";

const router = express.Router();

router.get("/", siteController.getAllSites);

router.get("/:siteId", siteController.getOneSite);

router.post("/", siteController.createNewSite);

router.patch("/:siteId", siteController.updateOneSite);

router.delete("/:siteId", siteController.deleteOneSite);

export default router;