import { Request, Response } from "express";
import { Op } from "sequelize";
import { Message } from "../models/message-model";
import { User } from "../models/user-model";
import { Advertisement } from "../models/ad-model";

export class MessageController {
  /**
   * Получение сообщений между двумя пользователями по объявлению
   */
  static async getMessages(req: Request, res: Response): Promise<any> {
    try {
      const { userId, chatPartnerId, adId } = req.query;

      if (!userId || !chatPartnerId || !adId) {
        res.status(400).json({ message: "userId, chatPartnerId and adId required" });
        return;
      }

      const messages = await Message.findAll({
        where: {
          adId: Number(adId),
          [Op.or]: [
            { senderId: Number(userId), recipientId: Number(chatPartnerId) },
            { senderId: Number(chatPartnerId), recipientId: Number(userId) },
          ],
        },
        include: [
          { model: User, as: "sender", attributes: ["id", "login", "email"] },
          { model: User, as: "recipient", attributes: ["id", "login", "email"] },
        ],
        order: [["created_at", "ASC"]],
      });

      res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed while GETTING message", error });
    }
  }

  /**
   * Отправка нового сообщения
   */
  static async sendMessage(req: Request, res: Response): Promise<any> {
    try {
      const { senderId, recipientId, adId, content } = req.body;

      if (!senderId || !recipientId || !adId || !content) {
        res.status(400).json({ message: "All fields senderId, recipientId, adId and content required" });
        return;
      }

      const message = await Message.create({
        senderId,
        recipientId,
        adId,
        content,
        isRead: false,
      });

      res.status(201).json(message);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed while SENDING message", error });
    }
  }

  /**
   * Отметить сообщение как прочитанное
   */
  static async markAsRead(req: Request, res: Response): Promise<any> {
    try {
      const { messageId } = req.params;

      const message = await Message.findByPk(messageId);

      if (!message) {
        res.status(404).json({ message: "Message not found." });
        return;
      }

      message.isRead = true;
      await message.save();

      res.status(200).json({ message: "Message marked as read.", data: message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed while UPDATING message", error });
    }
  }
}