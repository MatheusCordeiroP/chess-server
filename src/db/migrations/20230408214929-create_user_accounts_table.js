module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_accounts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      encrypted_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      confirmation_token: {
        type: Sequelize.STRING,
      },
      confirmed_at: {
        type: Sequelize.DATE,
      },
      confirmation_sent_at: {
        type: Sequelize.DATE,
      },
      reset_password_token: {
        type: Sequelize.STRING,
      },
      reset_password_token_sent_at: {
        type: Sequelize.DATE,
      },
      roles: {
        type: Sequelize.STRING,
        allowNull: true,
        get: function () {
          return JSON.parse(this.getDataValue('roles'));
        },
        set: function (val) {
          return this.setDataValue('roles', JSON.stringify(val));
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
    await queryInterface.dropTable('user_accounts');
  },
};
