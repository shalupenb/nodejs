"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product-controller");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.route("/").post(product_controller_1.ProductController.create).get(product_controller_1.ProductController.getAll);
