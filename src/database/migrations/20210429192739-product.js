'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('products',
      {id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type:Sequelize.STRING(50),
      },
      description: {
        type:Sequelize.TEXT,
      },
      price: {
        type:Sequelize.INTEGER(10)
      },
      image: {
        type:Sequelize.STRING(100),
      },
      id_franchise: {
        type:Sequelize.INTEGER(10)
      },
      id_productsCategory: {
        type:Sequelize.INTEGER(10)
      },
      created_at: {
        type:Sequelize.DATE
      }
      });
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
