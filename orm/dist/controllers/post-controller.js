"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const post_model_1 = require("../models/post-model");
class PostController {
    static async create(req, res) {
        const post = await post_model_1.Post.create({ ...req.body });
        if (post) {
            return res.status(201).json({ message: "User created successfully", data: post.dataValues });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
    static async read(req, res) {
        const posts = await post_model_1.Post.findAll();
        if (posts) {
            return res.status(201).json({ message: "List of products", data: posts });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
}
exports.PostController = PostController;
