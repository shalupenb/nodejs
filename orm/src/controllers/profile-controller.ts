import { Request, Response } from "express";
import { User } from "../models/user-model";
import { Profile } from "../models/profile-model";

export class ProfileController {
  static async create(
    req: Request<{},{},{city: string; detail_info: number; user_id: number}>, 
    res: Response
  ): Promise<any> {
    const profile = await Profile.create({ ...req.body });
    if(profile) {
      return res.status(201).json({message: "Profile created successfully", data: profile.dataValues});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
  static async read(
    req: Request, 
    res: Response
  ): Promise<any> {
    const profiles = await Profile.findAll({ include: User });
    if(profiles) {
      return res.status(201).json({message: "List of profiles", data: profiles});
    }
    return res.status(500).json({ message: "Db Error", data: null });
  }
}