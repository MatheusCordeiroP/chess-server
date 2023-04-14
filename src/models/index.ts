import Sequelize from 'sequelize';
import { DatabaseInterface } from '../typings/DatabaseInterface';
import { singleton } from '../helpers/singleton';

import { GameNotationFactory } from './game_notations';
import { GameRoomFactory } from './game_rooms';
import { UserAccountFactory } from './user_accounts';
import { UserScoreFactory } from './user_scores';

const config = require('../config/config');

const createModels = (sequelizeConfig: any): DatabaseInterface => {
  const { database, username, password } = sequelizeConfig;
  const sequelize = new Sequelize(
    database,
    username,
    password,
    sequelizeConfig
  );

  const database_: DatabaseInterface = {
    sequelize,
    Sequelize,

    GameNotation: GameNotationFactory(sequelize, Sequelize),
    GameRoom: GameRoomFactory(sequelize, Sequelize),
    UserAccount: UserAccountFactory(sequelize, Sequelize),
    UserScore: UserScoreFactory(sequelize, Sequelize),
  };

  for (const key in database_) {
    const model: any = database_[key as keyof DatabaseInterface];
    if (model.associate) {
      model.associate(database_);
    }
  }

  return database_;
};

export const models = singleton<DatabaseInterface>(
  function models(): DatabaseInterface {
    const environment = process.env.NODE_ENV || 'development';
    const sequelizeConfig = config[environment];

    const instance = createModels(sequelizeConfig);
    instance.sequelize
      .authenticate()
      .then(() => {
        console.log(
          'Connection has been established successfully',
          process.env.NODE_ENV
        );
        return 0;
      })
      .catch((error: unknown) => {
        console.log('Unable to connect to the database', error);
      });

    return instance;
  }
);
