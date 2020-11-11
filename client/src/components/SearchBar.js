import React, { useState } from 'react';
import { Container, Jumbotron, Form } from 'react-bootstrap';
import API from '../utils/API.js';
import SR from './SearchResult';

export default function SearchBar() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        API.getBooks(search)
            .then(response => setBooks(response.data.items))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Container style={{ border: "2px solid black", height: 140, margin: "30px", justifyContent: "center", alignItems: "center" }}>
                <Jumbotron style={{ margin: "30px" }}>
                    <h3>Book Search</h3>
                    <Form className="form-horizontal" onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Control size="lg" type="text" className="search-bar" name="BookSearch" value={search} onChange={handleInputChange} style={{ width: "100%" }} />
                            <button type="Submit" className="search-button" style={{ float: "right", margin: "10px" }}>Search</button>
                        </Form.Group>
                    </Form>
                </Jumbotron>
            </Container>
            <SR books={books} />
        </div>
    )
}

