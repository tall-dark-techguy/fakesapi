import { Request, Response, NextFunction } from "express";
import PostsService from "./posts.service";

const postsService = new PostsService();

export default class PostsController {
  async getPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await postsService.fetchPosts();

      res.json({
        status: "success",
        data: posts,
      });
    } catch (error) {
      next(error);
    }
  }

  async getPostById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await postsService.fetchPost(+id);

      res.json({
        status: "success",
        data: post,
      });
    } catch (error) {
      next(error);
    }
  }
}
