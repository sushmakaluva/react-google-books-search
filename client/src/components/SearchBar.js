import React,{ useState,useEffect } from 'react';
import Container from "@material-ui/core/Container";
import API from '../utils/API.js';
import SearchResults from './SearchResults';

export default function SearchBar() {

    const [books, setbooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        API.getBooks()
    });

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearch(value);
      };
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        API.getBooks(search)
            .then(response => setbooks(response.data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Container>
                <h1>Book Search</h1>
                <p>Book :</p>
                <form className="search-form" onSubmit={handleFormSubmit}>
                    <input type="text" className="search-bar" name="BookSearch" value={search} onChange={handleInputChange}></input>
                    <button type="Submit" className="search-button">Search</button>
                </form>
            </Container>
            <SearchResults books={books}/>
        </div>
    )
}
