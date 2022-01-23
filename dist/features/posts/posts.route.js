"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = __importDefault(require("./posts.controller"));
const router = express_1.Router();
const postsController = new posts_controller_1.default();
router.get("/", postsController.getPosts);
router.get("/:id", postsController.getPostById);
exports.default = router;
