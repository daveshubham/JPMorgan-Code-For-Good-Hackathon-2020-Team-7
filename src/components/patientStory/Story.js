import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './style.css';
import checkUp from './checkUp.jpg';
import group1 from './group1.jpg';
import patient1 from './patient1.jpg';
import patient2 from './patient2.jpg';
import wfh1 from './walkForHope.jpg';
import wfh2 from './walkforhope2.jpg';

import { Link } from "react-router-dom";
import LandingFoot from '../landingPage/LandingFoot';


function Story() {
  return (
    <div className="story">
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/">The ALS Association</Navbar.Brand>
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

      <div class="jumbotron">
        <h1 class="display-3 text-center">Community Stories</h1>
        <p class="lead text-center">Click any of the images below to check out stories from our patients, volunteers, and families</p>

      </div>


      <div class="container">
        <div class="gallery">
          <figure class="gallery__item gallery__item--1">
            {/* <img src={checkUp} alt="Gallery image 1" class="gallery__img"/> */}
            {/* <input type="image" src={checkUp} name="pic1" class="gallery__img" id="pic1" /> */}
            <Link to="/story1">
            <input type="image" src={checkUp} name="pic1" class="gallery__img" id="pic1" />
            </Link>
          </figure>
          <figure class="gallery__item gallery__item--2">
            {/* <img src={group1} alt="Gallery image 2" class="gallery__img"/> */}
            <input type="image" src={group1} name="pic2" class="gallery__img" id="pic2" />
          </figure>
          <figure class="gallery__item gallery__item--3">
            {/* <img src={patient1} alt="Gallery image 3" class="gallery__img"/> */}
            <input type="image" src={patient1} name="pic3" class="gallery__img" id="pic3" />
          </figure>
          <figure class="gallery__item gallery__item--4">
            {/* <img src={patient2} alt="Gallery image 4" class="gallery__img"/> */}
            <input type="image" src={patient2} name="pic4" class="gallery__img" id="pic4" />
          </figure>
          <figure class="gallery__item gallery__item--5">
            {/* <img src={wfh1} alt="Gallery image 5" class="gallery__img"/> */}
            <input type="image" src={wfh1} name="pic5" class="gallery__img" id="pic5" />
          </figure>
          <figure class="gallery__item gallery__item--6">
            {/* <img src={wfh2} alt="Gallery image 6" class="gallery__img"/> */}
            <input type="image" src={wfh2} name="pic6" class="gallery__img" id="pic6" />
          </figure>
        </div>
      </div>

      <LandingFoot />
    </div>
  );
}

export default Story;
