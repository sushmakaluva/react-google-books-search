import React from 'react';
import { Nav, NavbarBrand, Navbar } from 'react-bootstrap';

export default function NavBar() {
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavbarBrand>
                    <Nav.Link href="/" className="navbar-brand">
                        Google Books
                    </Nav.Link>
                </NavbarBrand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/search">Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/saved">Saved</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar>
        </div>
    )
}
