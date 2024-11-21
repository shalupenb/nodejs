import { Sequelize } from 'sequelize-typescript';
import "dotenv/config";
import { User } from '../models/user-model';
import { Advertisement } from '../models/ad-model';
import { Message } from '../models/message-model';

export const connection = new Sequelize({
    dialect: "mysql",
    timezone: process.env.DB_TIMEZONE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [User, Advertisement, Message],
  });