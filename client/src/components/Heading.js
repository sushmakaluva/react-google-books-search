import React from 'react';
import Container from '../components/Container.js';
import Jumbotron from '../components/Jumbotron.js';
import Row from '../components/Row.js';
import Col from '../components/Col.js';

export default function Heading() {
    return (
        <div>
            <Container>
                <Row size="md-12">
                    <Col>
                        <Jumbotron>
                            <h1><b>(React) Google Books Search</b></h1>
                            <p>Search for and Save Books of Interest</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
