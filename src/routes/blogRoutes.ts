import { createBlog, deleteBlog, getBlog, updateBlog } from "../controllers/blogController";
import { RequestHandler, Router } from "express";

const router = Router();

router.get("/", getBlog as RequestHandler);
router.post("/", createBlog as RequestHandler);
router.put("/:id", updateBlog as RequestHandler);
router.delete("/:id", deleteBlog as RequestHandler);

export default router;