"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_service_1 = __importDefault(require("./posts.service"));
const postsService = new posts_service_1.default();
class PostsController {
    async getPosts(req, res, next) {
        try {
            const posts = await postsService.fetchPosts();
            res.json({
                status: "success",
                data: posts,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getPostById(req, res, next) {
        try {
            const { id } = req.params;
            const post = await postsService.fetchPost(+id);
            res.json({
                status: "success",
                data: post,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = PostsController;
