import { Router } from "express";
import { CategoryController } from "../controllers/category-controller";

export const categoryRouter = Router();

categoryRouter.route("/create").post(CategoryController.create);
categoryRouter.route("/getAll").get(CategoryController.getAll);
categoryRouter.route("/getById/:id").get(CategoryController.getById);