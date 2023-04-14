import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface GameRoomsAttributes {
  id?: number;
  players?: number[];
  password: string;
  is_public: boolean;
  is_waiting: boolean;
}

export interface GameRoomsInstance
  extends Sequelize.Instance<GameRoomsAttributes>,
    GameRoomsAttributes {}

export interface GameRoomsModel
  extends Sequelize.Model<
    GameRoomsInstance,
    GameRoomsAttributes,
    GameRoomsAttributes
  > {
  createResponse: (response: string) => Promise<string>;
}

export const GameRoomFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): GameRoomsModel => {
  const attributes: SequelizeAttributes<GameRoomsAttributes> = {
    players: DataTypes.ARRAY(Sequelize.INTEGER),
    password: DataTypes.STRING,
    is_public: DataTypes.BOOLEAN,
    is_waiting: DataTypes.BOOLEAN,
  };

  const GameRoom = sequelize.define<GameRoomsInstance, GameRoomsAttributes>(
    'game_rooms',
    attributes,
    {
      tableName: 'game_rooms',
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    }
  ) as GameRoomsModel;

  GameRoom.createResponse = async (response: string) => {
    return await response;
  };

  return GameRoom;
};
