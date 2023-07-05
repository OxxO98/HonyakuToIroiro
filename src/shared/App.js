import React, {Component, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import {Home, About, Jan, Thumnail } from 'pages';
import * as Icon from 'react-feather';
import Container from 'react-bootstrap/Container';

import Navbar from 'components/Navbar';

class App extends React.Component{
  constructor(props){
    const location = window.location;
    super(props);
    if(location.pathname == "/"){
      this.state = {
        page : "/Home"
      };
    }
    else{
      this.state = {
        page : location.pathname
      };
    }
  }

  handlePageChange = (e) =>{
    this.setState({
      page : e.target.getAttribute("michi")
    });
    console.log("target:" + e.target.getAttribute("michi"));
    console.log("page:"+this.state.page);
  }

  render(){
    console.log("App:"+this.state.page);
    return (
      <Container fluid className="px-0">
        <Navbar page={this.state.page} onChange={this.handlePageChange}/>
        <Container fluid="md" className="px-0">
          <Route exact path="/">
            <Home onChange={this.handlePageChange}/>
          </Route>
          <Route path="/Home">
            <Home onChange={this.handlePageChange}/>
          </Route>
          <Route path="/January" component = {Jan}/>
          <Route path="/Thumnail" component = {Thumnail}/>
          <Route path="/About" component = {About}/>
        </Container>
      </Container>
    );
  }
}

export default App;
