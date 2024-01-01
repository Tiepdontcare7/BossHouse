import express from "express";

import { getAllOrder, addOrder, updateOrder, deleteOrder } from "../controllers/order.js";

const router = express.Router();

router.get("/", getAllOrder);
router.post("/add", addOrder);
router.post("/update", updateOrder);
router.post("/delete", deleteOrder);

export default router;
