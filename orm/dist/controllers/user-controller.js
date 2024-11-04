"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const post_model_1 = require("../models/post-model");
const user_model_1 = require("../models/user-model");
const profile_model_1 = require("../models/profile-model");
const redis_config_1 = require("../config/redis-config");
class UserController {
    static async create(req, res) {
        const user = await user_model_1.User.create({ ...req.body });
        if (user) {
            return res.status(201).json({ message: "User created successfully", data: user.dataValues });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
    static async read(req, res) {
        const users = await user_model_1.User.findAll();
        if (users) {
            return res.status(201).json({ message: "List of products", data: users });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
    static async readUserById(req, res) {
        const users = await user_model_1.User.findByPk(req.params.id, { include: [post_model_1.Post, profile_model_1.Profile] });
        if (users) {
            return res.status(201).json({ message: "User and Posts", data: users });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
    static async readUsersAndPosts(req, res) {
        const dataRedis = await redis_config_1.clientRedis.get("users");
        if (dataRedis) {
            console.log("Reading from cache");
            return res.status(201).json({
                message: "List of users",
                data: JSON.parse(dataRedis),
            });
        }
        const users = await user_model_1.User.findAll({ include: post_model_1.Post });
        if (users) {
            await redis_config_1.clientRedis.set("users", JSON.stringify(users), { EX: 120 });
            return res.status(201).json({ message: "Users and Posts", data: users });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
    static async deleteUserById(req, res) {
        const user = await user_model_1.User.destroy({ where: { id: req.params.id } });
        if (user) {
            return res.status(204).json({ message: "User deleted", data: null });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
}
exports.UserController = UserController;
