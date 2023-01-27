"use strict";/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'John Doe',
          email: 'johnteste@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'o puto',
          email: 'putoteste@gmail.com',
          password_hash: await bcryptjs.hash('123456789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'jorginho',
          email: 'jorginhoteste@gmail.com',
          password_hash: await bcryptjs.hash('12345678910', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
