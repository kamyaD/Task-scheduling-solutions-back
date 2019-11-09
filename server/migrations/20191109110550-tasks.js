'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Tasks', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        customer_first_name: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        personnel_first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        personnel_other_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        customer_last_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        agentId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        assigned: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        in_progress: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        completed: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        deferred: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        location: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        age: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        access_code: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        splash_page: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        mpesa: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        autoplay: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        comments: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        registration: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};
