import express from "express";
import { EXPRESS_PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Acqualitica App");
});

app.listen(EXPRESS_PORT, () => {
  console.log(`Executing express app from port ${EXPRESS_PORT}`);
});
