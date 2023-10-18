import express from "express";
import customerController from "../controllers/customerController.js";

const router = express.Router();

router.get("/", customerController.getAllCustomers);

router.get("/:customerId", customerController.getOneCustomer);

router.post("/", customerController.createNewCustomer);

router.patch("/:customerId", customerController.updateOneCustomer);

router.delete("/:customerId", customerController.deleteOneCustomer);

export default router;
