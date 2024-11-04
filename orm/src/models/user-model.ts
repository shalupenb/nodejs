import { v4 as uuidv4 } from 'uuid';
import { Model, Table, Column, DataType, HasMany, Default, HasOne } from "sequelize-typescript";
import { Post } from "./post-model";
import { Profile } from './profile-model';

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "cerated_at",
  updatedAt: "updated_at",
})
export class User extends Model {
  @Column ({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: uuidv4(),
  })
  id!: string;

  @Column({
    type: DataType.STRING(25),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(20),
    unique: true,
    allowNull: false,
  })
  login!: string;

  @Default(UserRole.GUEST)
  @Column({
    type: DataType.ENUM( ...Object.values(UserRole)),
    allowNull: false,
  })
  role!: string;

  @HasMany(() => Post)
  posts!: Post[];

  @HasOne(() => Profile)
  profile!: Profile;
}