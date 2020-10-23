import React from 'react';
import NavBar from '../components/NavBar';
import Heading from '../components/Heading';
import SavedBooks from '../components/SavedBooks';

export default function Saved() {
    return (
        <div>
            <NavBar />
            <Heading />
            <SavedBooks />
        </div>
    )
}
