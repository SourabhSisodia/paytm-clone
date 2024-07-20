import { Router } from "express";
import { userSignin, userSignup } from "../controller/user.js";

const router = Router();
router.post("/signup", userSignup);
router.post("/signin", userSignin);
export { router as user };
