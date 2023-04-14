import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface UserScoresAttributes {
  id?: number;
  score: number;
  last_scores: number[];
  last_opponents_scores: number[];
}

export interface UserScoresInstance
  extends Sequelize.Instance<UserScoresAttributes>,
    UserScoresAttributes {}

export interface UserScoresModel
  extends Sequelize.Model<
    UserScoresInstance,
    UserScoresAttributes,
    UserScoresAttributes
  > {
  createResponse: (response: string) => Promise<string>;
}

export const UserScoreFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): UserScoresModel => {
  const attributes: SequelizeAttributes<UserScoresAttributes> = {
    score: DataTypes.INTEGER,
    last_scores: DataTypes.ARRAY(Sequelize.INTEGER),
    last_opponents_scores: DataTypes.ARRAY(Sequelize.INTEGER),
  };

  const UserScore = sequelize.define<UserScoresInstance, UserScoresAttributes>(
    'user_scores',
    attributes,
    {
      tableName: 'user_scores',
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    }
  ) as UserScoresModel;

  UserScore.createResponse = async (response: string) => {
    return await response;
  };

  return UserScore;
};
