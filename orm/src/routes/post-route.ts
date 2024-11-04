import { Router } from "express";
import { PostController } from "../controllers/post-controller";

export const postRouter = Router();

postRouter.route("/").post(PostController.create).get(PostController.read);