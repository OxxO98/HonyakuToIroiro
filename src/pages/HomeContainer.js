import React from 'react';
import { Link, Route } from  'react-router-dom';
import { MainContainer } from 'pages';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextComp from './noruweinomori.js';

class HomeContainer extends React.Component {
  render(){
    return(
      <div>
        <Cover/>
        <Index onChange={this.props.onChange}/>
      </div>
    )
  }
}

class Cover extends React.Component{
  render(){
    return(
      <div>
        <TextComp></TextComp>
      </div>
    )
  }
}

class IssueElemnt extends React.Component{
  render(){
    return(
      <div>
        <div className="bg-dark clearfix w-75">
          <span className="border border-dark"></span>
        </div>
        <h1>Issue NO.1</h1>
        <p>아직 개발중인데 빈공간 넣는 법을 모른다</p>
        <p>이제 막하는 중인데 일단은 텍스트로 채워야지 더 쓰게된다면 자동으로 내려쓰기 가능한지도 확인을 해봐야함</p>
        <p>가능하네</p>
      </div>
    )
  }
}

class IndexElement extends React.Component{
  render(){
    return(
      <Row>
        <Col xl={2}>
          <p>{this.props.num}</p>
        </Col>
        <Col xl={10}>
          <Link to={this.props.michi} michi={this.props.title} onClick={this.props.onChange}>{this.props.title}</Link>
          <p>{this.props.sub}</p>
        </Col>
      </Row>
    )
  }
}

class IndexListElement extends React.Component{
  render(){
    return(
      <Container className="p-0">
        <Row>
          <Col xl={2}>
          </Col>
          <Col xl={10}>
            <h5>{this.props.title}</h5>
          </Col>
        </Row>
        {this.props.list}
      </Container>
    )
  }
}

class Index extends React.Component{
  render(){
    {/*const bookTitle = [
      { index : "005", michi : "친절한 드로잉", sub : "드로잉에 알면 좋은것들"},
      { index : "006", michi : "친절한 컬러링", sub : "컬러링에 알면 도움되는 것들"}
    ]
    */}
    const specialTitle = [
      { index : "007", title : "January", michi : "/January", sub: "Jaunuary Drawing"},
      { index : "007", title : "Thumnail", michi : "/Thumnail", sub: "Thumnail"}
    ]
    {/*const bookList = bookTitle.map((title, index) => (<IndexElement key={index} title={title.michi} num={title.index} sub={title.sub} onChange={this.props.onChange}/>));*/}
    const specialList = specialTitle.map((title, index) => (<IndexElement key={index} title={title.title} michi={title.michi} num={title.index} sub={title.sub} onChange={this.props.onChange}/>));

    return(
      <Container fluid className="p-0">
        <Container className="p-0">
          <h1 className="text-center">Index</h1>
        </Container>
        <Container className="p-0">
          <Row>
            <Col md={8} xl={4}>
              <IssueElemnt/>
            </Col>
            <Col md={4} xl={4}>
              {/*}<IndexListElement title="What to read" list={bookList}/>*/}
            </Col>
            <Col md={12} xl={4}>
              <IndexListElement title="Special" list={specialList}/>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default HomeContainer;
