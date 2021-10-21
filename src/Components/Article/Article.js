import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Article = (props) => {
 const {title,description,urlToImage}=props.news;
 return (
  <div>
   <Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
   
  </div>
 );
};

export default Article;