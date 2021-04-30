'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('users', {
    DNI: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(50)
        },
        surname: {
            type: Sequelize.STRING(50)
        },
        email: {
            type: Sequelize.STRING(30)
        },
        password: {
            type: Sequelize.STRING(100)
        },
        id_provice: {
            type: Sequelize.INTEGER(10)
        },
        address: {
            type: Sequelize.STRING(30)
        },
        avatar: {   
            type: Sequelize.STRING(100)
        },
       
        dateOfBirth: {
            type: Sequelize.DATE
        },
        phoneNumber: {
            type: Sequelize.INTEGER
        },
        created_at: {
            type: Sequelize.DATE
        },
      })
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
