'use strict';

const { DATEONLY } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Kandidats', [
      {
        nama: 'Mochammad Faris',
        email: 'loveinsemarang@gmail.com',
        jk: 'L',
        tempat: 'Sidoarjo',
        tanggallahir: '',
        alamat: 'Jl. Perwira',
        kab: 'Kotawaringin Barat',
        prov: 'Kalteng',
        kewarganegaraan: 'Indonesia',
        notelp: '081232139950',
        pendidikan: 'S1',
        jurusan: 'Teknik Informatika',
        lokasi: 'masih sama kek kemarin',
        sumber: 'IG',
        sumberket: 'IG Post CBI',
        salary: '15.000.000',
        bulan: 'agustus',
        tahun: '2022',
        image: 'default.jpg',
        file: 'default.pdf',
        pekerjaanId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Ivo Mailisa',
        email: 'loveinsemarang@gmail.com',
        jk: 'P',
        tempat: 'Sidoarjo',
        tanggallahir: '',
        alamat: 'Jl. Perwira',
        kab: 'Kotawaringin Barat',
        prov: 'Kalteng',
        kewarganegaraan: 'Indonesia',
        notelp: '081232139950',
        pendidikan: 'S1',
        jurusan: 'Teknik Informatika',
        lokasi: 'masih sama kek kemarin',
        sumber: 'IG',
        sumberket: 'IG Post CBI',
        salary: '15.000.000',
        bulan: 'agustus',
        tahun: '2022',
        image: 'default.jpg',
        file: 'default.pdf',
        pekerjaanId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Monica Egi Viana Raya',
        email: 'loveinsemarang@gmail.com',
        jk: 'P',
        tempat: 'Sidoarjo',
        tanggallahir: '',
        alamat: 'Jl. Perwira',
        kab: 'Kotawaringin Barat',
        prov: 'Kalteng',
        kewarganegaraan: 'Indonesia',
        notelp: '081232139950',
        pendidikan: 'S1',
        jurusan: 'Teknik Informatika',
        lokasi: 'masih sama kek kemarin',
        sumber: 'IG',
        sumberket: 'IG Post CBI',
        salary: '15.000.000',
        bulan: 'agustus',
        tahun: '2022',
        image: 'default.jpg',
        file: 'default.pdf',
        pekerjaanId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kandidats', null, {});

  }
};
