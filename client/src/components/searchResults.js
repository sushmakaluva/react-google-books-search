import React from 'react';
import Card from '@material-ui/core/Card';
import Button from  '@material-ui/core/Button';

export default function SearchResults(props) {
    return (
        <div>
            {props.books.map(book => {
                return (
                    <Card>
                        <Card.Img variant="top" src="{book.items.imageLinks.smallThumbnail}" />
                        <Card.Body>
                            <Card.Title>{book.items.title}</Card.Title>
                            <Card.authors>Written by+" "+ {book.items.authors}</Card.authors>
                            <Card.Text>
                                {book.items.description}
                            </Card.Text>
                            <Card.Text>Rating :{book.items.averageRating}</Card.Text>
                            <Button variant="primary">View</Button>
                            <Button variant="primary">Save</Button>
                        </Card.Body>
                    </Card>
                )
            })
            }
        </div>
    )
}
