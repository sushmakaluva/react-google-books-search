import React,{useState} from 'react';
import { Card, Button, Row, Jumbotron, Container } from 'react-bootstrap';
import API from '../utils/API';

export default function SearchResults(props) {

    const [formObject, setFormObject] = useState({
        title: "",
        sub_title: "",
        image: "",
        description: "",
        rating: "",
    })


    function saveAsFavorite() {
        API.saveFavorite({
            title: formObject.title,
            sub_title: formObject.sub_title,
            image: formObject.image,
            description: formObject.description,
            rating: formObject.rating
        })
    }
    return (
        <div>
            <h3 style={{ margin: "20px" }}> Results :</h3>
            {props.books.map(book =>
                (<Jumbotron >
                    <Row key={book.volumeInfo.title}>
                        <Container style={{ border: "2px solid black", padding: "10px", margin: "20px" }}>
                            <Card>
                                <Card.Title name="title"><b>{book.volumeInfo.title} </b></Card.Title>
                                <Card.Subtitle name="sub_title">Written by : {book.volumeInfo.authors.join(", ")}</Card.Subtitle>
                                <Card.Img name="image" variant="top" src={book.volumeInfo.imageLinks.smallThumbnail} style={{ float: "left", height: "100px", width: "100px", padding: "20px" }} />
                                <Card.Text name="description">
                                    {book.volumeInfo.description}
                                </Card.Text>
                                <Card.Text name="rating" >Rating : {book.volumeInfo.averageRating}</Card.Text>
                                <Button variant="primary"><a href={book.volumeInfo.infoLink} target="_blank">View</a></Button>
                                <Button variant="primary" onClick={saveAsFavorite}>Save</Button>
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
