import React from 'react';
import Container from "@material-ui/core/Container";
import Jumbotron from '../components/Jumbotron.js';
import {Row, Col } from "./Grid";

export default function Heading() {
    return (
        <div>
            <Container style={{ border: "1px solid #cecece" }}  >
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
