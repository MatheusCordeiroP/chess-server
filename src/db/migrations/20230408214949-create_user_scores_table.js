module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_scores', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user_accounts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      last_scores: {
        type: Sequelize.STRING,
        allowNull: true,
        get: function () {
          return JSON.parse(this.getDataValue('last_scores'));
        },
        set: function (val) {
          return this.setDataValue('last_scores', JSON.stringify(val));
        },
      },
      last_opponents_scores: {
        type: Sequelize.STRING,
        allowNull: true,
        get: function () {
          return JSON.parse(this.getDataValue('last_opponents_scores'));
        },
        set: function (val) {
          return this.setDataValue(
            'last_opponents_scores',
            JSON.stringify(val)
          );
        },
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
    await queryInterface.dropTable('user_scores');
  },
};
