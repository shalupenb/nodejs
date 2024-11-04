"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = require("express");
const profile_controller_1 = require("../controllers/profile-controller");
exports.profileRouter = (0, express_1.Router)();
exports.profileRouter.route("/").post(profile_controller_1.ProfileController.create).get(profile_controller_1.ProfileController.read);
