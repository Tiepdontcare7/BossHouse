import express from "express";
import { checkPermission } from "../middlewares/checkPermissition.js";
import { BlogController } from "../controllers/index.js";

const router = express.Router();

router.get("/", BlogController.getAllBlogs);

router.get("/:id", BlogController.getOneBlog);

router.post("/add", checkPermission, BlogController.addBlog);

router.put("/update/:id", checkPermission, BlogController.updateBlog);

router.delete("/delete/:id", checkPermission, BlogController.deleteBlog);

export default router;
