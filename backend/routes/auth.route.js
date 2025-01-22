import express from "express";
import { signup, logout, login, refreshToken } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

router.post("/refresh-token", refreshToken);

export default router;
