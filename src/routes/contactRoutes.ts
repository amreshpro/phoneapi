import express from "express";
import { markSpam } from "../controllers/contactContreoller";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/markSpam", authMiddleware, markSpam);

export default router;
