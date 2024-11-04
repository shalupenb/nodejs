import { Request, Response } from "express";
import { Post } from "../models/post-model";

export class PostController {
  static async create(
    req: Request<{},{},{title: string; price: number; id_category: number}>, 
    res: Response
  ): Promise<any> {
    const post = await Post.create({ ...req.body });
    if(post) {
      return res.status(201).json({message: "User created successfully", data: post.dataValues});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
  static async read(
    req: Request, 
    res: Response
  ): Promise<any> {
    const posts = await Post.findAll();
    if(posts) {
      return res.status(201).json({message: "List of products", data: posts});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}