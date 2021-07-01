import express from "express";
const router = express.Router();
import authUser   from "../controllers/authRouteController.js";

router.post("/", authUser)
export default router;