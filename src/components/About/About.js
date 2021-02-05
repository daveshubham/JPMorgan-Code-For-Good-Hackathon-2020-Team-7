import AboutUs from './AboutUs.jpg';
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import '../../index.css';
import * as serviceWorker from '../../serviceWorker';
import Story from "../../components/patientStory/Story";
import MapWrapper from "../../components/mapPage/MapWrapper";
import Profile from "../../components/profilePage/Profile";
import {Link} from "react-router-dom";
import LandingFoot from '../landingPage/LandingFoot';

function About() {
  return (
    <div className="About">

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
        <h1 class="display-3 text-center">About Us</h1>
        <p class="lead text-center">Read more about who we are and what we do</p>

      </div>

    <div class = 'container'>
    <p>Established in 1987, The ALS Association Florida Chapter is fighting Lou Gehrig’s Disease on all fronts, or as we like to say, “Covering all the bases for people living with ALS in Florida."  We provide patient programs, advocate on behalf of patients with our government leaders, create awareness of the disease, and fund research.  In addition, the Chapter provides financial support to our statewide multidisciplinary ALS clinics and research facilities, enabling them to increase patient care.</p>

<p>As the preeminent ALS organization, The ALS Association leads the way in research, care services, public education, and public policy — giving help and hope to those facing the disease.  The Florida Chapter is one of more than 39 nationwide chapters providing comprehensive patient services and support to the ALS community.  The mission of The ALS Association is to lead the fight to treat and cure ALS through global research and nationwide advocacy, while also empowering people with Lou Gehrig’s Disease and their families to live fuller lives by providing them with compassionate care and support.</p>

<p>With more than 1,600 people living with ALS in the state of Florida at any given time, we could not do what we do without the ongoing generosity and support of others.  From the smallest donation to the largest gift, donors touch the ALS community with hope for the future.  This terrible disease knows no racial, ethnic, or socioeconomic boundaries.  It can strike anyone at any time.  Every 90 minutes, someone is diagnosed with ALS, and every 90 minutes, someone dies from ALS.  Time isn't on the side of those afflicted.  Fighting ALS is a full-time job.  And we will not quit until there is a treatment and cure.</p>

    </div>
     
      <div class = 'container'> <img src={AboutUs} class="rounded mx-auto d-block" /> </div>
      
      
      {/* // <div  id='map' style={{width:800, height:600}}> </div> */}
    <LandingFoot />
    </div>
  )

}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
export default About;
