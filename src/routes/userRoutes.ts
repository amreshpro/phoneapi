import express from "express";
import { searchByName, searchByPhone } from "../controllers/userController";

const router = express.Router();

router.get("/search/name", searchByName);
router.get("/search/phone", searchByPhone);

export default router;
