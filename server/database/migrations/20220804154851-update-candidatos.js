'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Candidatos','sobrenome', 
    {
        type: Sequelize.STRING 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Candidatos','sobrenome');
  }
};