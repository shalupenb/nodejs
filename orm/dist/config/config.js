"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const category_model_1 = require("../models/category-model");
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "shalupenb",
    password: "Gi4akc2004",
    database: "knp212",
    models: [category_model_1.Category],
});
