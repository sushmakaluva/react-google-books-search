import axios from "axios";

export default {
    getBooks: function (search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes/?maxResults=5", { params: { q: search } });
    },

    saveFavorite: function(savedBook){
        return axios.post("/api/favorites", savedBook);
    },

    listFavorites : function(){
        return axios.get('/api/favorites')
    }
};

