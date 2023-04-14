module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('game_notations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      player_user_ids: {
        type: Sequelize.STRING,
        allowNull: true,
        get: function () {
          return JSON.parse(this.getDataValue('player_user_ids'));
        },
        set: function (val) {
          return this.setDataValue('player_user_ids', JSON.stringify(val));
        },
      },
      notation: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('game_notations');
  },
};
