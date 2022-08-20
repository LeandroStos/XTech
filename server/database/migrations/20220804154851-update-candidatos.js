'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Candidatos','avatar', 
    {
        type: Sequelize.STRING 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Candidatos','avatar');
  }
};