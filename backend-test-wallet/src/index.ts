import dotenv from "dotenv";
dotenv.config();

import express from "express";
import http from "http";
import bodyParser from "body-parser";
import compression from "compression";
import router from "./router";
import cors from "cors";

const app = express();
app.use(cors());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log(`Server running at port 8080`);
});

app.use("/", router());
