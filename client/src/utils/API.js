import axios from "axios";

export default {
    getBooks: function (search) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        return axios.get("https://www.googleapis.com/books/v1/volumes?q={search}&maxResults=2", { params: { q: search } });
    },
};