'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kandidat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kandidat.belongsTo(models.Pekerjaan)
    }
  }
  Kandidat.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    jk: DataTypes.STRING,
    tempat: DataTypes.STRING,
    tanggallahir: DataTypes.DATE,
    alamat: DataTypes.STRING,
    kab: DataTypes.STRING,
    prov: DataTypes.STRING,
    kewarganegaraan: DataTypes.STRING,
    notelp: DataTypes.STRING,
    pendidikan: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    sumber: DataTypes.STRING,
    sumberket: DataTypes.STRING,
    salary: DataTypes.STRING,
    bulan: DataTypes.STRING,
    tahun: DataTypes.STRING,
    file: DataTypes.STRING,
    image: DataTypes.STRING,
    pekerjaanId: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'Kandidat',
  });
  return Kandidat;
};