import express from "express";
import { getmessages, sendMessage } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute,getmessages);
router.post("/send/:id", protectRoute,sendMessage);

export default router;
