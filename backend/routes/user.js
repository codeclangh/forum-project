import express from "express";
import { protect } from "../middleware/auth.js";
import * as controller from "../controllers/user.js";

const router = express.Router();

router.post("/", controller.registerUser);

router.post("/login", controller.loginUser);

export default router;
