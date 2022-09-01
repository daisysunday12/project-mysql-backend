const { User } = require('../../db/models');
const bcrypt = require("bcryptjs");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await User.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  actionCreate: async (req, res, next) => {
    try {
      const { password } = req.body;
      const payload = req.body;

      const hashPassword = await bcrypt.hash(password, 10);
      const apiData = new User({ ...payload, password: hashPassword });
      await apiData.save();
      res.status(201).json({ msg: "success", data: apiData });
    } catch (err) {
      if (err && err.name === "ValidationError") {
        return res.status(422).json({
          error: 1,
          message: err.message,
          fields: err.errors,
        });
      }
      next(err);
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const apiData = await User.findOne({
        where: { id: id }
      });
      apiData.destroy()
      let currentImage = `${config.rootPath}/public/uploads/users/${apiData.image}`;
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