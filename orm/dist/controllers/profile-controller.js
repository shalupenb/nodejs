"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const user_model_1 = require("../models/user-model");
const profile_model_1 = require("../models/profile-model");
class ProfileController {
    static async create(req, res) {
        const profile = await profile_model_1.Profile.create({ ...req.body });
        if (profile) {
            return res.status(201).json({ message: "Profile created successfully", data: profile.dataValues });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
    static async read(req, res) {
        const profiles = await profile_model_1.Profile.findAll({ include: user_model_1.User });
        if (profiles) {
            return res.status(201).json({ message: "List of profiles", data: profiles });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
}
exports.ProfileController = ProfileController;
