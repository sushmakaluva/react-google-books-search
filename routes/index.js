const savedController = require('../controllers/savedController.js');

module.exports = function (router) {
  router.post('/api/favorites', function (req, res) {
    savedController.create(req.body)
      .then(dbFav => res.status(200).json(dbFav))
      .catch(err => res.status(400).json({ error: err.message }))
  })

  router.get('/api/favorites', function (req, res) {
    savedController.list()
      .then(dbFav => res.status(200).json(dbFav))
      .catch(err => res.status(400).json({ error: err.message }))
  })
}

