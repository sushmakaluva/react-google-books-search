import React from 'react';
import Heading from '../components/Heading';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/searchResults';

export default function Search() {
    return (
        <div>
            <NavBar />
            <Heading />
            <SearchBar />
            <SearchResults />
        </div>
    )
}
