const dbFav = require("../models/favorites.js");

module.exports = {
  create: function (favorite) {
    return dbFav
      .create(favorite)
  },

  list: function () {
    return dbFav
      .find({})
  },

  delete:function(id){
    return dbFav
    .deleteOne({_id:id})
  }
}


