import { Model, Table, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user-model";

@Table({
  tableName: "profiles",
  timestamps: true,
  createdAt: "cerated_at",
  updatedAt: "updated_at",
})
export class Profile extends Model {
  @Column ({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    unique: true,
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  detail_info!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id!: string;

  @BelongsTo(() => User)
  user!: User;
}