import React,{useState,useEffect} from 'react';
import { Container, Jumbotron, Row, Col,Card } from 'react-bootstrap';
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
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }

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
