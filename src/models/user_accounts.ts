import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface UserAccountsAttributes {
  id?: number;
  username: string;
  email: string;
  encrypted_password: string;
  confirmation_token: string;
  confirmed_at: Date;
  confirmation_sent_at: Date;
  reset_password_token: string;
  reset_password_token_sent_at: Date;
}

export interface UserAccountsInstance
  extends Sequelize.Instance<UserAccountsAttributes>,
    UserAccountsAttributes {}

export interface UserAccountsModel
  extends Sequelize.Model<
    UserAccountsInstance,
    UserAccountsAttributes,
    UserAccountsAttributes
  > {
  registerUser: (userData: {
    username: string;
    email: string;
    encrypted_password: string;
  }) => Promise<any>;
}

export const UserAccountFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): UserAccountsModel => {
  const attributes: SequelizeAttributes<UserAccountsAttributes> = {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    encrypted_password: DataTypes.STRING,
    confirmation_token: DataTypes.STRING,
    confirmed_at: DataTypes.DATE,
    confirmation_sent_at: DataTypes.DATE,
    reset_password_token: DataTypes.STRING,
    reset_password_token_sent_at: DataTypes.DATE,
  };

  const UserAccount = sequelize.define<
    UserAccountsInstance,
    UserAccountsAttributes
  >('user_accounts', attributes, {
    tableName: 'user_accounts',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  }) as UserAccountsModel;

  UserAccount.registerUser = async (userData: {
    username: string;
    email: string;
    encrypted_password: string;
  }) => {
    return await userData;
  };

  return UserAccount;
};
