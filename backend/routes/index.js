import { Router } from "express";
import { user } from "./user.js";
const allRoutes = Router();
allRoutes.use("/user", user);
export default allRoutes;
