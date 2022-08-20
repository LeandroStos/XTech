'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Vagas', [
        {
          funcao: "Programador Jr",
          salario: 2100.00,
          modalidade: "Efetivo / CLT",
          segmento: "Back-end",
          habilidades: "Back-end",
          data: '2017-10-25',
          empresaId: 1,
          contato: 'email@email.com',
          cidade: "São Paulo",
          estado: "São Paulo",
          createdAt: new Date(),
          updatedAt: new Date()
  
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
