import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">
                    Google Books
                </Link>
                <div>
                    <ul>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/saved">Saved</Link></li>
                    </ul>
                </div>

            </nav>

        </div>
    )
}
