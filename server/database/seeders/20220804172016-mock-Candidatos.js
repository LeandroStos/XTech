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

     await queryInterface.bulkInsert('Candidatos', [
      {
        nome: "Willy Fernando Nascimento",
        email: "willy27nascimento@gmail.com",
        genero: "masculino",
        Segmento: "Back-end",
        list: "C++",
        data_nascimento: '2017-10-25',
        celular: '119999-9999',
        github:'will@27',
        linkedin:'will@27',
        endereco: "Cotia sp",
        cidade: "Brasil",
        estado: "São Paulo",
        sobre: "Sou muito dedicado!",
        password: "$2b$10$dFk6DEu7w4UXoRJHW8VP8eoIUIk3X3R09120fe.7wYbBnkrNKRhG2",
        avatar: "avatar-1661015709532-218071419-images.png",
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
  await queryInterface.bulkDelete('Candidatos',null,{})
  }
};
