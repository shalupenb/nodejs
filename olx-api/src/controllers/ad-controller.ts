import { Request, Response } from "express";
import { Op } from "sequelize";
import { Advertisement } from "../models/ad-model";
import { User } from "../models/user-model";

export class AdController {
  /**
   * Получение всех объявлений
   */
  static async getAds(req: Request, res: Response): Promise<any> {
    try {
      const ads = await Advertisement.findAll({
        include: [
          {
            model: User,
            attributes: ["id", "login", "email"],
          },
        ],
      });
      res.status(200).json(ads);
    } catch (error) {
      console.error("Failed while GETTING adverisements:", error);
      res.status(500).json({ message: "Failed while GETTING adverisements:", error });
    }
  }

  /**
   * Получение объявления по ID
   */
  static async getAdById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const ad = await Advertisement.findByPk(id, {
        include: [
          {
            model: User,
            attributes: ["id", "login", "email"],
          },
        ],
      });

      if (!ad) {
        return res.status(404).json({ message: "Advertisements not found." });
      }

      res.status(200).json(ad);
    } catch (error) {
      console.error("Failed while GETTING adverisements:", error);
      res.status(500).json({ message: "Failed while GETTING adverisements:", error });
    }
  }

  /**
   * Создание нового объявления
   */
  static async createAd(req: Request, res: Response): Promise<any> {
    try {
      const { title, description, category, price, photos, user_id } = req.body;

      if (!title || !description || !category || !price || !user_id) {
        return res.status(400).json({ message: "Fill all required fields!" });
      }

      const ad = await Advertisement.create({
        title,
        description,
        category,
        price,
        photos,
        user_id,
      });

      res.status(201).json(ad);
    } catch (error) {
      console.error("Failed while CREATING adverisements:", error);
      res.status(500).json({ message: "Failed while CREATING adverisements:", error });
    }
  }

  /**
   * Обновление объявления
   */
  static async updateAd(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { title, description, category, price, photos } = req.body;

      const ad = await Advertisement.findByPk(id);

      if (!ad) {
        return res.status(404).json({ message: "Advertisements not found." });
      }

      await ad.update({ title, description, category, price, photos });
      res.status(200).json(ad);
    } catch (error) {
      console.error("Failed while UPDATING adverisements:", error);
      res.status(500).json({ message: "Failed while UPDATING adverisements:", error });
    }
  }

  /**
   * Удаление объявления
   */
  static async deleteAd(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const ad = await Advertisement.findByPk(id);

      if (!ad) {
        return res.status(404).json({ message: "Advertisements not found." });
      }

      await ad.destroy();
      res.status(204).send();
    } catch (error) {
      console.error("Failed while DELETING adverisements:", error);
      res.status(500).json({ message: "Failed while DELETING adverisements:", error });
    }
  }

  /**
   * Поиск объявлений
   */
  static async searchAds(req: Request, res: Response): Promise<any> {
    try {
      const { title, category, minPrice, maxPrice } = req.query;

      const whereConditions: any[] = [];

      if (title) {
        whereConditions.push({ title: { [Op.like]: `%${title}%` } });
      }

      if (category) {
        whereConditions.push({ category: { [Op.like]: `%${category}%` } });
      }

      if (minPrice) {
        whereConditions.push({ price: { [Op.gte]: Number(minPrice) } });
      }

      if (maxPrice) {
        whereConditions.push({ price: { [Op.lte]: Number(maxPrice) } });
      }

      const ads = await Advertisement.findAll({
        where: {
          [Op.and]: whereConditions,
        },
        include: [
          {
            model: User,
            attributes: ["id", "login", "email"],
          },
        ],
      });

      if (ads.length === 0) {
        return res.status(404).json({ message: "Advertisements not found." });
      }

      res.status(200).json(ads);
    } catch (error) {
      console.error("Failed while SEARCHING adverisements:", error);
      res.status(500).json({ message: "Failed while SEARCHING adverisements:", error });
    }
  }
}