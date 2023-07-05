import React, {useState} from 'react';
import * as Icon from'react-feather';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Navbar(props) {
  const [open, setOpen] = useState(false);
  return (
    <Container fluid className="sticky-top bg-primary shadow p-3 mb-5 rounded">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <BreadcrumbElement page={props.page} onChange={props.onChange}/>
          </Col>
          <Col sm={12} md={4}>
            <h2 className="text-white text-center align-middle">OxxO</h2>
          </Col>
          <Col className="d-none d-md-block" md={4}>
            <SearchBar/>
          </Col>
          <div className="d-sm-block d-md-none">
              <Button onClick={()=> setOpen(!open)} aria-controls="collapableSearch" aria-expanded={open}>
                <Icon.Search/>
              </Button>
              <Collapse in={open}>
                <Col md={4} id="collapableSearch">
                  <SearchBar/>
                </Col>
              </Collapse>
          </div>
        </Row>
      </Container>
    </Container>
  )
}

class SearchBar extends React.Component{
  render(){
    return(
      <InputGroup>
        <Form.Control type="text" placeholder="search"/>
        <InputGroup.Append>
          <Button variant="light">
            <Icon.Search size={16}/>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    )
  }
}

class BreadcrumbElement extends React.Component{
  render(){
    switch (this.props.page) {
      case "/" :
      case "/Home":
        return(
          <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
          </Breadcrumb>
        )
      break;
      case "/January":
        return(
          <Breadcrumb>
            {/* tlqkf 암튼 이렇게 써줘야함*/}
            <Breadcrumb.Item as={LinkContainer} to="/Home" michi="/Home" onClick={this.props.onChange}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>January</Breadcrumb.Item>
          </Breadcrumb>
        )
      break;
      case  "/Thumnail":
        return(
          <Breadcrumb>
            <Breadcrumb.Item as={LinkContainer} to="/Home" michi="/Home" onClick={this.props.onChange}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Thumnail</Breadcrumb.Item>
          </Breadcrumb>
        )
      break;
    }
    return(
      <Breadcrumb>
        <Breadcrumb.Item as={LinkContainer} to="/Home" michi="/Home" onClick={this.props.onChange}>Home</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default Navbar;
