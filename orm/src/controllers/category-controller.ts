import { Category } from "../models/category-model";
import { Request, Response, NextFunction } from "express";

export class CategoryController {
  static async create(
    req: Request<{}, {}, {title: string}>, 
    res: Response 
  ): Promise<any> {
    const category = await Category.create({ ...req.body });
    console.log(category);
    if(category) {
      return res.status(201).json({message: "Category created successfully", data: req.body});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
  static async getAll(
    req: Request, 
    res: Response
  ): Promise<void> {
    try {
      const categories = await Category.findAll();
      res.status(200).json({ data: categories });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Db Error", data: null });
    }
  }
  static async getById(
    req: Request<{id: string}>, 
    res: Response 
  ): Promise<any> {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    console.log(category);
    if(category) {
      res.status(200).json({ data: category });
    } else {
      res.status(500).json({ message: "Db Error", data: null });
    }
  }
}