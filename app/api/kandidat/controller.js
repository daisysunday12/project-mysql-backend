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
  actionCreate: async (req, res) => {
    try {
      const { pekerjaan, nama, tempat, tanggal, alamat, pendidikan, jurusan, sumber, jk, ketsumber, email, kab, prov, kewarganegaraan, notelp, lokasi, salary } = req.body;

      if (req.file) {
        let tmp_path = req.file.path;
        let originaExt = req.file.originalname.split(".")[req.file.originalname.split(".").length - 1];
        let filename = req.file.filename + "." + originaExt;
        let target_path = path.resolve(config.rootPath, `public/uploads/data-kandidat/img/${filename}`);

        const src = fs.createReadStream(tmp_path);
        const dest = fs.createWriteStream(target_path);

        src.pipe(dest);
        src.on("end", async () => {
          try {
            const apiData = new Kandidat({
              pekerjaanId: pekerjaan,
              nama,
              email,
              lokasi,
              jurusan,
              tempat,
              tanggallahir: tanggal,
              alamat,
              pendidikan,
              jk,
              salary,
              sumberket: ketsumber,
              sumber,
              notelp,
              kewarganegaraan,
              prov,
              kab,
              image: filename,
            });
            await apiData.save();
            res.status(201).json({ msg: "success", data: apiData });
          } catch (err) {
            return res.status(422).json({
              error: 1,
              message: err.message,
              fields: err.errors,
            });
          }
        });
      } else {
        const apiData = new Kandidat({
          pekerjaanId: pekerjaan,
          nama,
          email,
          lokasi,
          jurusan,
          tempat,
          tanggallahir: tanggal,
          alamat,
          pendidikan,
          jk,
          salary,
          sumberket: ketsumber,
          sumber,
          notelp,
          kewarganegaraan,
          prov,
          kab,
        });
        await apiData.save();
        res.status(201).json({ msg: "success", data: apiData });
      }
    } catch (err) {
      return res.status(422).json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
  },
  actionPostImage: async (req, res) => {
    try {
      const { id } = req.params;

      if (req.file) {
        let tmp_path = req.file.path;
        let originaExt = req.file.originalname.split(".")[req.file.originalname.split(".").length - 1];
        let filename = req.file.filename + "." + originaExt;
        let target_path = path.resolve(config.rootPath, `public/uploads/data-kandidat/img/${filename}`);

        const src = fs.createReadStream(tmp_path);
        const dest = fs.createWriteStream(target_path);

        src.pipe(dest);
        src.on("end", async () => {
          try {
            const apiData = await Kandidat.findOne({ where: { id: id } });

            let currentImage = `${config.rootPath}/public/uploads/data-kandidat/img/${apiData.image}`;
            if (fs.existsSync(currentImage)) {
              fs.unlinkSync(currentImage);
            }
            await apiData.update(
              {
                image: filename,
              }
            );
            res.status(201).json({ msg: "success", data: apiData });
          } catch (err) {
            return res.status(422).json({
              msg: "failed",
              error: 1,
              message: err.message,
              fields: err.errors,
            });
          }
        });
      } else {
        return res.status(422).json({
          error: 1,
          message: err.message,
          fields: err.errors,
        });
      }
    } catch (err) {
      return res.status(422).json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
  },
  actionPostFile: async (req, res) => {
    try {
      const { id } = req.params;

      if (req.file) {
        let tmp_path = req.file.path;
        let originaExt = req.file.originalname.split(".")[req.file.originalname.split(".").length - 1];
        let filename = req.file.filename + "." + originaExt;
        let target_path = path.resolve(config.rootPath, `public/uploads/data-kandidat/file/${filename}`);

        const src = fs.createReadStream(tmp_path);
        const dest = fs.createWriteStream(target_path);

        src.pipe(dest);
        src.on("end", async () => {
          try {
            const apiData = await Kandidat.findOne({ where: { id: id } });

            let currentImage = `${config.rootPath}/public/uploads/data-kandidat/file/${apiData.file}`;
            if (fs.existsSync(currentImage)) {
              fs.unlinkSync(currentImage);
            }
            await apiData.update(
              {
                file: filename,
              }
            );
            res.status(201).json({ msg: "success", data: apiData });
          } catch (err) {
            return res.status(422).json({
              error: 1,
              message: err.message,
              fields: err.errors,
            });
          }
        });
      } else {
        return res.status(422).json({
          error: 1,
          message: err.message,
          fields: err.errors,
        });
      }
    } catch (err) {
      return res.status(422).json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const apiData = await Kandidat.findOne({
        where: { id: id }
      });
      apiData.destroy()
      let currentFile = `${config.rootPath}/public/uploads/data-kandidat/file/${apiData.file}`;
      if (fs.existsSync(currentFile)) {
        fs.unlinkSync(currentFile);
      }
      let currentImage = `${config.rootPath}/public/uploads/data-kandidat/img/${apiData.image}`;
      if (fs.existsSync(currentImage)) {
        fs.unlinkSync(currentImage);
      }
      res.status(201).json({ msg: "data berhasil dihapus" });
    } catch (err) {
      return res.status(422).json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
  },
}