import { Post } from "../models/post-model";
import { Request, Response } from "express";
import { User } from "../models/user-model";
import { Profile } from "../models/profile-model";
import { clientRedis } from "../config/redis-config";

export class UserController {
  static async create(
    req: Request<{},{},{title: string; price: number;}>, 
    res: Response
  ): Promise<any> {
    const user = await User.create({ ...req.body });
    if(user) {
      return res.status(201).json({message: "User created successfully", data: user.dataValues});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
  static async read(
    req: Request, 
    res: Response
  ): Promise<any> {
    const users = await User.findAll();
    if(users) {
      return res.status(201).json({message: "List of products", data: users});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
  static async readUserById(
    req: Request<{ id: string }>, 
    res: Response
  ): Promise<any> {
    const users = await User.findByPk(req.params.id, { include: [Post, Profile] });
    if(users) {
      return res.status(201).json({message: "User and Posts", data: users});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
  static async readUsersAndPosts(
    req: Request, 
    res: Response
  ): Promise<any> {
    const dataRedis = await clientRedis.get("users")
    if(dataRedis) {
      console.log("Reading from cache");
      return res.status(201).json({
        message: "List of users",
        data: JSON.parse(dataRedis),
      });
    }
    const users = await User.findAll({ include: Post });
    if(users) {
      await clientRedis.set("users", JSON.stringify(users), { EX: 120 });
      return res.status(201).json({message: "Users and Posts", data: users});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
  static async deleteUserById(
    req: Request<{ id: string }>, 
    res: Response
  ): Promise<any> {
    const user = await User.destroy({ where : { id:req.params.id } });
    if(user) {
      return res.status(204).json({message: "User deleted", data: null});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}