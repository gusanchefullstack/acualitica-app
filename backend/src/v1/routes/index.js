import express from "express";
const apiv1router = express.Router();
import customerRouter from "./customerRoutes.js";

apiv1router.use("/customers", customerRouter);

export default apiv1router;
