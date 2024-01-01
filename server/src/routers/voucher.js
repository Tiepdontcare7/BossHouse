import express from "express";
import { VoucherController } from "../controllers/index.js";
import { checkPermission } from "../middlewares/checkPermissition.js";

const router = express.Router();

router.get("/", VoucherController.getAll);

router.get("/:id", VoucherController.getOne);

router.post("/add",checkPermission, VoucherController.addVoucher);

// router.put("/update/:id", CategoryController.updateCate);

// router.delete("/delete/:id", CategoryController.deleteCate);

router.post("/applyVoucher", VoucherController.applyVoucher);

export default router;
