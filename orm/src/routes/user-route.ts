import { Router } from "express";
import { UserController } from "../controllers/user-controller";

export const userRouter = Router();

userRouter.route("/").post(UserController.create).get(UserController.readUsersAndPosts);
userRouter.route("/:id").get(UserController.readUserById).delete(UserController.deleteUserById);