"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("../controllers/post-controller");
exports.postRouter = (0, express_1.Router)();
exports.postRouter.route("/").post(post_controller_1.PostController.create).get(post_controller_1.PostController.read);
