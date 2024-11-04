"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.route("/").post(user_controller_1.UserController.create).get(user_controller_1.UserController.readUsersAndPosts);
exports.userRouter.route("/:id").get(user_controller_1.UserController.readUserById).delete(user_controller_1.UserController.deleteUserById);
