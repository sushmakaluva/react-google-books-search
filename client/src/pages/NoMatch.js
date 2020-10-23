import React from 'react';
import Container from '../components/Container.js';
import Jumbotron from '../components/Jumbotron.js';
import Row from '../components/Row.js';
import Col from '../components/Col.js';


export default function NoMatch() {
    return (
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
    )
}
