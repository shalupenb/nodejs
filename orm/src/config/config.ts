import { Sequelize } from "sequelize-typescript";
import { Category } from "../models/category-model";

export const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "shalupenb",
  password: "Gi4akc2004",
  database: "knp212",
  models: [Category],
});