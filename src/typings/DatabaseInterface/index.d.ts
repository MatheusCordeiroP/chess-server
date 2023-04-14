import * as Sequelize from 'sequelize';

import { GameNotationsModel } from '../../models/game_notations';
import { GameRoomsModel } from '../../models/game_rooms';
import { UserAccountsModel } from '../../models/user_accounts';
import { UserScoresModel } from '../../models/user_scores';

export interface DatabaseInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;

  GameNotation: GameNotationsModel;
  GameRoom: GameRoomsModel;
  UserAccount: UserAccountsModel;
  UserScore: UserScoresModel;
}
