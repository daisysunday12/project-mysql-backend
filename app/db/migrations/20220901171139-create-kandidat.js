'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kandidats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      nama: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.STRING
      },
      tempat: {
        type: Sequelize.STRING
      },
      tanggallahir: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      kab: {
        type: Sequelize.STRING
      },
      prov: {
        type: Sequelize.STRING
      },
      kewarganegaraan: {
        type: Sequelize.STRING
      },
      notelp: {
        type: Sequelize.STRING
      },
      pendidikan: {
        type: Sequelize.STRING
      },
      jurusan: {
        type: Sequelize.STRING
      },
      lokasi: {
        type: Sequelize.STRING
      },
      sumber: {
        type: Sequelize.STRING
      },
      sumberket: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      bulan: {
        type: Sequelize.STRING
      },
      tahun: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      pekerjaanId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'pekerjaans',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kandidats');
  }
};