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

     await queryInterface.bulkInsert('Empresas', [
      {
        nome: "Industria teste",
        cnpj:'123456789',
        email: "email@email.com",
        endereco: "Rua Das Graças",
        cidade: "São Paulo",
        estado: "São Paulo",
        password: "$2b$10$dFk6DEu7w4UXoRJHW8VP8eoIUIk3X3R09120fe.7wYbBnkrNKRhG2",
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
  await queryInterface.bulkDelete('Empresas',null,{})
  }
};
