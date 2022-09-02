const { Pekerjaan, Kandidat } = require('../../db/models');
const path = require("path");
const fs = require("fs");
const config = require("../../../config");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await Kandidat.findAll({
        attributes: ['id', 'nama', 'email', 'jk', 'tempat', 'tanggallahir', 'alamat', 'kab', 'prov', 'kewarganegaraan', 'notelp', 'pendidikan', 'jurusan', 'lokasi', 'sumber', 'sumberket', 'salary', 'bulan', 'tahun', 'file', 'image', 'createdAt'],
        include: {
          model: Pekerjaan,
          attributes: ['id', 'pekerjaan'],
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
  kandidatDetails: async (req, res) => {
    try {
      const { id } = req.params;
      const apiDetails = await Kandidat.findOne({
        where: { id: id },
        include: {
          model: Pekerjaan,
          attributes: ['id', 'pekerjaan']
        }
      });
      res.status(200).json(apiDetails);
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
}