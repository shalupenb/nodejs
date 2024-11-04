"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_model_1 = require("../models/product-model");
class ProductController {
    static async create(req, res) {
        const product = await product_model_1.Product.create({ ...req.body });
        console.log(product);
        if (product) {
            return res.status(201).json({ message: "Category created successfully", data: product.dataValues });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
    static async getAll(req, res) {
        const products = await product_model_1.Product.findAll();
        if (products) {
            return res.status(201).json({ message: "List of products", data: products });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
}
exports.ProductController = ProductController;
