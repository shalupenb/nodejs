import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import { Product } from "./product-model";

@Table({
  tableName: "category",
  timestamps: false,
})
export class Category extends Model {
  @Column ({
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

  @HasMany(() => Product)
  products!: Product[];
}
