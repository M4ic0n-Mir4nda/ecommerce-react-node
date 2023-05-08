'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [
      {
        descricao: 'Item 1',
        valor: 22.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Item 2',
        valor: 15.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Item 3',
        valor: 21.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Item 4',
        valor: 45.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Item 5',
        valor: 1.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Item 6',
        valor: 2.29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Item 7',
        valor: 10.39,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Item 8',
        valor: 15.59,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Item 9',
        valor: 13.19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Item 10',
        valor: 109.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
