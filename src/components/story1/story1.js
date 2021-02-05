import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Story from "../../components/patientStory/Story";
import MapWrapper from "../../components/mapPage/MapWrapper";
import { Link } from "react-router-dom";
import checkUp from './checkUp.jpg'


function Story1() {
  return (
    <div className="story1">
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

        <div class="container">
            <h1>Medical Volunteering with Jennifer</h1>
            <h3>by: Jennifer Doe</h3>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet feugiat viverra. Maecenas nec est congue enim sagittis tempor. Donec maximus, ipsum eu porttitor convallis, odio mi elementum leo, vel posuere justo libero vel purus. Integer ipsum justo, venenatis at turpis vel, scelerisque vestibulum justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget pulvinar lectus. Quisque scelerisque dignissim mauris eget lacinia. Maecenas vel sapien sed ipsum consequat feugiat in ut purus. Nunc quis nibh malesuada, luctus tortor sit amet, aliquam elit. Nam blandit purus eu leo interdum venenatis. Nunc quis viverra mi, ut tempus nisi. Quisque porta, nulla rhoncus tristique fringilla, ante orci pulvinar nulla, consequat maximus nibh mi vel nisl.</p>
            <p>Sed tincidunt, dolor ac cursus rutrum, neque ligula egestas mi, sit amet facilisis ipsum leo ut magna. Nunc est nulla, vestibulum non turpis iaculis, sodales rutrum nulla. Sed id libero vehicula, maximus quam a, tincidunt nunc. Vivamus laoreet semper pulvinar. Maecenas efficitur dictum mauris, vitae vulputate augue pellentesque at. Mauris erat nulla, molestie in luctus in, ornare sit amet lorem. Suspendisse at eros lacus. Aliquam non elit nec mauris viverra maximus. Vestibulum molestie lorem eget tellus rhoncus fermentum. Vivamus facilisis nunc orci, a consequat est scelerisque ac. Proin tincidunt felis vel faucibus dictum.</p>
            <p>Pellentesque tincidunt felis ante, sed faucibus elit accumsan ac. Vestibulum vehicula, purus eu posuere fringilla, nibh libero porttitor quam, in ultrices ex odio in risus. Nulla blandit tincidunt tellus et pharetra. Morbi dignissim lorem enim, ac dictum magna maximus id. Pellentesque ut ipsum vitae eros pulvinar finibus ut in magna. Proin vitae elit in libero ultricies gravida. Sed pharetra lorem vitae quam porttitor, nec ullamcorper arcu cursus.</p>
            <img src={checkUp}/>
        </div>

    </div>
  );
}

export default Story1;
