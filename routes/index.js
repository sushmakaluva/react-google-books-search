const savedController = require('../controllers/savedControllers.js');
const path = require('path');

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

  router.delete('/api/favorites/:book_id', function (req, res) {
    savedController.delete(req.params.book_id)
      .then(fav => res.status(200).json({ message: "deleted comment" }))
      .catch(err => res.status(400).json({ error: err.message }))
  })

  // If no API routes are hit, send the React app
  // router.all('*', function (req, res) {
  //   res.sendFile(path.join(__dirname, "../client/build/index.html"));
  // });


}

