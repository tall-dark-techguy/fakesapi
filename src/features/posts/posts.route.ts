import { Router } from "express";
import PostsController from "./posts.controller";

const router = Router();
const postsController = new PostsController();

router.get("/", postsController.getPosts);
router.get("/:id", postsController.getPostById);

export default router;
