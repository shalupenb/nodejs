import { Router } from "express";
import { ProductController } from "../controllers/product-controller";

export const productRouter = Router();

productRouter.route("/").post(ProductController.create).get(ProductController.getAll);