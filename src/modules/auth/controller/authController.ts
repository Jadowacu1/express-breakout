import { NextFunction, Request, Response } from "express";
import { insertUser } from "../repository/authRepository";

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const result = await insertUser({ email, password });
      
      if (result) {
        res.status(200).json("Account Created");
      }
        res.status(400).json("Something Went Wrong");
    } catch (err) {
         res.status(500).send("Internal server error");
    }
  };



