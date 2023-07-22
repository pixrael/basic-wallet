import express from "express";
import { movements } from "../assets/data";

export const getAllMovements = async (
  req: express.Request,
  res: express.Response
) => {
  return res.status(200).json(movements);
};

export const createNewMovement = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { amount, concept } = req.body;

    if (!amount || (!concept && concept !== 0)) {
      return res.sendStatus(400);
    }

    const nowDate = new Date();
    const formattedDate = nowDate.toISOString().slice(0, 19).replace("T", " ");

    const newMovement = {
      id: movements.movements.length + 1,
      amount,
      concept,
      date: formattedDate,
    };

    movements.movements.push(newMovement);
    if (concept === 0) movements.balance += amount;
    else movements.balance -= amount;

    return res.status(200).json(newMovement).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
