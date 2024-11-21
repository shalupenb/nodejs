import { Model, Table, Column, DataType, HasMany, Default, HasOne, AutoIncrement } from "sequelize-typescript";
import { Message } from "./message-model";
import { Advertisement } from "./ad-model";

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class User extends Model {
  @Column ({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(25),
    unique: true,
    allowNull: false,
  })
  login!: string;

  @Column({
    type: DataType.STRING(50),
    unique: true,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password!: string;

  @Default(UserRole.GUEST)
  @Column({
    type: DataType.ENUM( ...Object.values(UserRole)),
    allowNull: false,
  })
  role!: string;

  @HasMany(() => Message, 'senderId')
  sentMessages!: Message[];

  @HasMany(() => Message, 'recipientId')
  receivedMessages!: Message[];

  @HasMany(() => Advertisement)
  ads!: Advertisement[];
}
