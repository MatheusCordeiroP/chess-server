import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface GameNotationsAttributes {
  id?: number;
  player_user_ids: string;
  notation: string;
}

export interface GameNotationsInstance
  extends Sequelize.Instance<GameNotationsAttributes>,
    GameNotationsAttributes {}

export interface GameNotationsModel
  extends Sequelize.Model<
    GameNotationsInstance,
    GameNotationsAttributes,
    GameNotationsAttributes
  > {
  createResponse: (response: string) => Promise<string>;
}

export const GameNotationFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): GameNotationsModel => {
  const attributes: SequelizeAttributes<GameNotationsAttributes> = {
    player_user_ids: DataTypes.STRING,
    notation: DataTypes.TEXT,
  };

  const GameNotation = sequelize.define<
    GameNotationsInstance,
    GameNotationsAttributes
  >('game_notations', attributes, {
    tableName: 'game_notations',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  }) as GameNotationsModel;

  GameNotation.createResponse = async (response: string) => {
    return await response;
  };

  return GameNotation;
};
