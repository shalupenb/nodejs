"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_model_1 = require("../models/category-model");
class CategoryController {
    static async create(req, res) {
        const category = await category_model_1.Category.create({ ...req.body });
        console.log(category);
        if (category) {
            return res.status(201).json({ message: "Category created successfully", data: req.body });
        }
        return res.status(500).json({ message: "Db Error", data: null });
    }
    static async getAll(req, res) {
        try {
            const categories = await category_model_1.Category.findAll();
            res.status(200).json({ data: categories });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Db Error", data: null });
        }
    }
    static async getById(req, res) {
        const { id } = req.params;
        const category = await category_model_1.Category.findByPk(id);
        console.log(category);
        if (category) {
            res.status(200).json({ data: category });
        }
        else {
            res.status(500).json({ message: "Db Error", data: null });
        }
    }
}
exports.CategoryController = CategoryController;
