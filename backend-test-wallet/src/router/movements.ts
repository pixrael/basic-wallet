import express from "express";
import { getAllMovements, createNewMovement } from "../controllers/movements";

export default (router: express.Router) => {
  router.get("/movements", getAllMovements);
  router.post("/movements", createNewMovement);
};
