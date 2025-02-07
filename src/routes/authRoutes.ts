import { Router,Request,Response } from "express";
import { signUp } from "../modules/auth/controller/authController"; 
const authRoute: Router = Router();

// This sets the route and calls the signUp handler
authRoute.post('/CreateAccount', signUp);

authRoute.get("/test", async (req: Request, res: Response) => {
    res.status(200).json("Test Passed!")});

export {authRoute};
