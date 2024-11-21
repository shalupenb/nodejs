import { Model, Table, Column, DataType, Default, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user-model";
import { Advertisement } from "./ad-model";

@Table({
  tableName: "messages",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Message extends Model {
  @Column ({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column ({
    type: DataType.INTEGER,
    allowNull: false,
  })
  senderId!: number;

  @ForeignKey(() => User)
  @Column ({
    type: DataType.INTEGER,
    allowNull: false,
  })
  recipientId!: number;

  @ForeignKey(() => Advertisement)
  @Column ({
    type: DataType.INTEGER,
    allowNull: false,
  })
  adId!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  content!: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isRead!: boolean;

  @BelongsTo(() => User, 'senderId')
  sender!: User;

  @BelongsTo(() => User, 'recipientId')
  recipient!: User;

  @BelongsTo(() => Advertisement, 'adId')
  advertisement!: Advertisement;
}