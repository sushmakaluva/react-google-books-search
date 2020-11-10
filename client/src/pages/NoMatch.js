import React from 'react';
import NavBar from '../components/NavBar.js';
import Heading from '../components/Heading.js';
import SearchBar from '../components/SearchBar.js';
import {Jumbotron,Container,Row, Col } from 'react-bootstrap';

export default function NoMatch() {
    return (
        <div>
            <NavBar />
            <Heading />
            <SearchBar />
            <Container fluid>
                <Row size="md-12">
                    <Col>
                        <Jumbotron>
                            <h1>404 Page Not Found</h1>
                            <h1>
                                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                    🙄
                            </span>
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
