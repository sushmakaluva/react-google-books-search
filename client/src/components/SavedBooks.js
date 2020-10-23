import React from 'react';
import Container from '../components/Container.js';
import Jumbotron from '../components/Jumbotron.js';
import Row from '../components/Row.js';
import Col from '../components/Col.js';
import Card from '../components/Card.js';

export default function SavedBooks() {
    return (
        <div>
            <Container>
                <Row size="md-12">
                    <Col>
                        <Jumbotron>
                            <Card/>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
