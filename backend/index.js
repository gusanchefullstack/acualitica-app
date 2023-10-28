import express from "express";
import { EXPRESS_PORT } from "./config.js";
import bodyParser from "body-parser";
import apiv1router from "./src/v1/routes/index.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Acqualitica App");
});

// app.use(bodyParser.json());
app.use(express.json())
app.use("/api/v1", apiv1router);

app.listen(EXPRESS_PORT, () => {
  console.log(`Executing Acqualitica app from port ${EXPRESS_PORT}`);
});
