import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Row, Card, Button } from 'react-bootstrap';
import API from '../utils/API';

export default function SavedBooks() {
    const [favbooks, setFavBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.listFavorites()
            .then(res =>
                setFavBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteFavBook(id) {
        API.deleteBook(id)
            .then(res =>loadBooks() )
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h3 style={{ margin: "20px" }}> Results :</h3>
            {favbooks.map(favbook =>
                (<Jumbotron >
                    <Row key={favbook.title}>
                        <Container style={{ border: "2px solid black", padding: "10px", margin: "20px" }}>

                            <Card>
                                <Card.Title name="title"><b>{favbook.title} </b></Card.Title>
                                <Card.Subtitle name="sub_title">Written by : {favbook.authors}</Card.Subtitle>
                                <Card.Img name="image" variant="top" src={favbook.image} style={{ float: "left", height: "100px", width: "100px", padding: "20px" }} />
                                <Card.Text name="description">
                                    {favbook.description}
                                </Card.Text>
                                <Card.Text name="rating" >Rating : {favbook.rating}</Card.Text>
                                <Button variant="primary"><a href={favbook.infoLink} target="_blank" rel="noopener noreferrer">View</a></Button>
                                <Button variant="primary" type="submit" onClick={() => deleteFavBook(favbook._id)}>Delete</Button>
                            </Card>

                        </Container>
                    </Row>
                </Jumbotron>
                )
            )
            }
        </div>
    )
}
