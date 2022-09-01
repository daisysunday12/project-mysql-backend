const { Pekerjaan } = require('../../db/models');
const path = require("path");
const fs = require("fs");
const config = require("../../../config");

module.exports = {
  getPekerjaanFrontEnd: async (req, res, next) => {
    try {
      const result = await Pekerjaan.findAll({
        where:
        {
          status: 'Y',
        },
        attributes: ['id', 'pekerjaan', 'image'],
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
  getDetailsPekerjaanFrontEnd: async (req, res, next) => {
    try {
      const { id } = req.params;
      const apiData = await Pekerjaan.findOne({ where: { id: id } });
      res.status(200).json(apiData);
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
  getPekerjaanBackend: async (req, res) => {
    try {
      const apiData = await Pekerjaan.findAll()
      res.status(200).json(apiData);
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { pekerjaan, deskripsiPekerjaan } = req.body;
      if (req.file) {
        let tmp_path = req.file.path;
        let originaExt = req.file.originalname.split(".")[req.file.originalname.split(".").length - 1];
        let filename = req.file.filename + "." + originaExt;
        let target_path = path.resolve(config.rootPath, `public/uploads/banner-pekerjaan/${filename}`);

        const src = fs.createReadStream(tmp_path);
        const dest = fs.createWriteStream(target_path);

        src.pipe(dest);
        src.on("end", async () => {
          try {
            const apiData = new Pekerjaan({
              pekerjaan,
              deskripsiPekerjaan,
              image: filename,
            });
            await apiData.save();
            res.status(201).json({ msg: "success", data: apiData });
          } catch (err) {
            res.status(500).json({ message: err.message || `Internal server error` });
          }
        });
      } else {
        const apiData = new Pekerjaan({
          pekerjaan,
          deskripsiPekerjaan,
        });
        await apiData.save();
        res.status(201).json({ msg: "success", data: apiData });
      }
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
}