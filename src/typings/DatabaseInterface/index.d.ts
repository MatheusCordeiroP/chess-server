import * as Sequelize from 'sequelize';

export interface DatabaseInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
}
