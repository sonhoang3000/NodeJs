"use strict";
module.exports = {
      up: async (queryInterface, Sequelize) => {
            await queryInterface.createTable("package_bookings", {
                  id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER,
                  },
                  statusId: {
                        type: Sequelize.STRING,
                  },
                  packageId: {
                        type: Sequelize.INTEGER,
                  },
                  patientId: {
                        type: Sequelize.INTEGER,
                  },
                  date: {
                        type: Sequelize.STRING,
                  },
                  timeType: {
                        type: Sequelize.STRING,
                  },
                  token: {
                        type: Sequelize.STRING,
                  },
                  createdAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                  },
                  updatedAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                  },
            });
      },
      down: async (queryInterface, Sequelize) => {
            await queryInterface.dropTable("package_bookings ");
      },
};
