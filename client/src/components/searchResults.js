import React from 'react';
import { Card, Button, Row, Jumbotron, Container } from 'react-bootstrap';
import API from '../utils/API';

export default function SearchResults(props) {

    function saveAsFavorite(book) {
        API.saveFavorite({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            image: book.volumeInfo.imageLinks.smallThumbnail,
            description: book.volumeInfo.description,
            rating: book.volumeInfo.averageRating,
            infoLink: book.volumeInfo.infoLink,
        })
            .then(function (response) {
              alert('Book saved')
            })
            .catch(e => {
                alert(e.error);
            });
    }
    return (
        <div>
            {(props.books)?(<h3 style={{ margin: "20px" }}> Results :</h3>):" "}
            {props.books.map(book =>
                (<Jumbotron >
                    <Row key={book.id}>
                        <Container style={{ border: "2px solid black", padding: "10px", margin: "20px" }}>
                            <Card>
                                <Card.Title name="title"><b>{book.volumeInfo.title} </b></Card.Title>
                                <Card.Subtitle name="sub_title">Written by : {book.volumeInfo.authors.join(", ")}</Card.Subtitle>
                                <Card.Img name="image" variant="top" src={book.volumeInfo.imageLinks.smallThumbnail} style={{ float: "left", height: "100px", width: "100px", padding: "20px" }} />
                                <Card.Text name="description">
                                    {book.volumeInfo.description}
                                </Card.Text>
                                <Card.Text name="rating" >Rating : {book.volumeInfo.averageRating}</Card.Text>
                                <Button variant="primary" name="infoLink"><a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" >View</a></Button>
                                <Button variant="primary" onClick={() => saveAsFavorite(book)}>Save</Button>
                            </Card>

                        </Container>
                    </Row>
                </Jumbotron>
                )
            )
            }
        </div >
    )
}
