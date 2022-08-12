'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vagas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      funcao: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.FLOAT
      },
      modalidade: {
        type: Sequelize.STRING
      },
      segmento: {
        type: Sequelize.STRING
      },
      habilidades: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      empresaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Empresas',
          key: 'id'
        }
      },
      cidade: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vagas');
  }
};