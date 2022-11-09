import Sequelize from 'sequelize';
import config from '../config/config';
import { DatabaseInterface } from '../typings/DatabaseInterface';
import { singleton } from '../helpers/singleton';

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
