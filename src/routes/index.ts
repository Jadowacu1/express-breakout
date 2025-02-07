import { Router } from "express";
import {authRoute} from "./authRoutes";
import dbcon from "../database/config/connection";

const Routes = Router();
dbcon();
Routes.use('/auth',authRoute);

export default Routes;
