import { Model, Table, Column, DataType, Default, ForeignKey, } from "sequelize-typescript";
import { Category } from "../models/category-model";

@Table({
  tableName: "products",
  timestamps: false,
})
export class Product extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  title!: string;

  @Default(10)
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price!: number;

  @ForeignKey(() => Category)
  @Column({ 
    type: DataType.INTEGER, 
    allowNull: false 
  })
  id_category!: number;
}
 