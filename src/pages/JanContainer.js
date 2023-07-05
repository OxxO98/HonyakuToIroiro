import React from 'react';
import Card from 'react-bootstrap/Card';

const JanContainer = () =>{
  return(
    <div>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src="img/20200103 archer.png"/>
        <Card.Body>
          <Card.Title>Archer</Card.Title>
          <Card.Text>Some text on the Picture</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JanContainer;
