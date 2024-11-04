import { Router } from "express";
import { ProfileController } from "../controllers/profile-controller";

export const profileRouter = Router();

profileRouter.route("/").post(ProfileController.create).get(ProfileController.read);