'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidatos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      genero: {
        type: Sequelize.STRING
      },
      segmento: {
        type: Sequelize.STRING
      },
      list: {
        type: Sequelize.STRING
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      endereco: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidatos');
  }
};