const { Pekerjaan } = require('../../db/models');

module.exports = {
  getPekerjaanFrontEnd: async (req, res, next) => {
    try {
      const result = await Pekerjaan.findAll({
        attributes: ['id', 'pekerjaan', 'image'],
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
}