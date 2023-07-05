import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'

class ThumbnailContainer extends React.Component{
  render(){
    return(
      <div>
        <img src="img/20191031 Pirate.png" className="img-fluid" alt="Resposive Image"/>
        <ThumbnailGroup/>
      </div>
    )
  }
}

class ThumbnailGroup extends React.Component{
  render(){
    return(
      <Container fluid className="p-0">
        <CardColumns>
          <Thumbnail src="20191217 호위기사.png"/>
          <Thumbnail src="20191031 Pirate.png"/>
          <Thumbnail src="20191226 크리스마스.png"/>
          <Thumbnail src="20200109 MOTIV.png"/>
          <Thumbnail src="20200123 motive4.png"/>
          <Thumbnail src="20200211 infighter.png"/>
          <Thumbnail src="20200421 마비노기.png"/>
          <Thumbnail src="20200507 모티브.png"/>
        </CardColumns>
      </Container>
    );
  }
}

function formatImg(img){
  return "img/" + img;
}

class Thumbnail extends React.Component{
  render(){
    return(
        <Card>
          <div className="h-75">
            <Card.Img variant="top" src={formatImg(this.props.src)}/>
          </div>
          <Card.Body>
            <Card.Title>Archer</Card.Title>
            <Card.Text>Some text on the Picture</Card.Text>
          </Card.Body>
        </Card>
    )
  }
}

export default ThumbnailContainer;
