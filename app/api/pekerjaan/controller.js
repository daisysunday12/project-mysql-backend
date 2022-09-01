const { Pekerjaan } = require('../../db/models');

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
}