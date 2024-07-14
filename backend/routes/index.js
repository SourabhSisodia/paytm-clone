import { Router } from "express";
import { user } from "./user.js";
// import router from "./usersRoute.js";
const allRoutes = Router();
allRoutes.use("/user", user);
export default allRoutes;
