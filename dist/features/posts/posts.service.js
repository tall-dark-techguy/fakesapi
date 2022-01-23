"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class PostsService {
    constructor() {
        this.api_url = "https://jsonplaceholder.typicode.com";
    }
    async fetchPosts() {
        const res = await axios_1.default.get(`${this.api_url}/posts`);
        return res.data;
    }
    async fetchPost(id) {
        const res = await axios_1.default.get(`${this.api_url}/posts/${id}`);
        return res.data;
    }
}
exports.default = PostsService;
