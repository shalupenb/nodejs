"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
require("dotenv/config");
const user_model_1 = require("../models/user-model");
const post_model_1 = require("../models/post-model");
const profile_model_1 = require("../models/profile-model");
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    timezone: process.env.DB_TIMEZONE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [user_model_1.User, post_model_1.Post, profile_model_1.Profile],
});
