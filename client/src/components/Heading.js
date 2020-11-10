import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

export default function Heading() {
    return (
        <div>
            <Container style={{ border: "2px solid black", height: 100,margin:"30px",justifyContent:"center",alignItems: "center"  }}  >
                <Row size="md-12">
                    <Col>
                        <Jumbotron style={{ textAlign: "center" }}>
                            <h1><b>(React) Google Books Search</b></h1>
                            <p>Search for and Save Books of Interest</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
