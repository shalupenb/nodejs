import { Model, Table, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Message } from "./message-model";
import { User } from "./user-model";

@Table({
  tableName: "advertisements",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Advertisement extends Model {
  @Column ({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(75),
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  category!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  photos!: string[];

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;

  @HasMany(() => Message, 'adId')
  messages!: Message[];

  @BelongsTo(() => User)
  user!: User;
}

