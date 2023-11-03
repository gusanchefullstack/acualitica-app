import express from "express";
const apiv1router = express.Router();
import customerRouter from "./customerRoutes.js";
import siteRouter from "./siteRoutes.js";

apiv1router.use("/customers", customerRouter);
apiv1router.use("/sites", siteRouter);

export default apiv1router;
