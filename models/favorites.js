const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  infoLink:{ type: String, required: true },
})

const Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;