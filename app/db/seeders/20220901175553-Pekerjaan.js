'use strict';

const { DATEONLY } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pekerjaans', [
      {
        pekerjaan: 'Staff IT Programmer',
        deskripsiPekerjaan: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
        image: 'default.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pekerjaan: 'Staff Risk Management',
        deskripsiPekerjaan: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
        image: 'default.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pekerjaan: 'Staff Agroservices',
        deskripsiPekerjaan: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
        image: 'default.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pekerjaans', null, {});
  }
};
