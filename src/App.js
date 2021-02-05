import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Landing from './components/landingPage/Landing';
import JumbotronPage from './components/landingPage/LandingJumbotron';
import LandingFoot from './components/landingPage/LandingFoot';

import {Link} from "react-router-dom";



function App() {

  return (
    <div className="App">
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">The ALS Association</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/story" >Patient Story</Nav.Link>
          <Nav.Link as={Link} to="/map">Event Map</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="landing-content">
      <JumbotronPage />
      <LandingFoot />
    </div>
    </div>
  );
}





export default App;
