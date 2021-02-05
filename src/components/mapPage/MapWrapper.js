import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import '../../index.css';
import * as serviceWorker from '../../serviceWorker';
import Story from "../../components/patientStory/Story";
import Profile from "../../components/profilePage/Profile";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import L from 'leaflet'
import LandingFoot from '../landingPage/LandingFoot';

class MapWrapper extends Component {

  constructor() {
    super();
    this.state = {
      map: null,
    };
  }

  componentDidMount() {
    var map = L.map('map', {
    center: [27.9739, -82.3361],
      zoom: 10
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)
    const position = [27.9739, -82.3361]
    const myIcon = L.icon({
      iconUrl: 'https://static.thenounproject.com/png/650867-200.png',
      iconAnchor: [100, 200]
    });

    L.marker(position, { icon: myIcon })
      .addTo(map)
    return this.setState({
      map: map
    });
  }


  render() {
    return (
      <div className="mapPage">
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
        <h1 class="display-3 text-center">Event Map</h1>
        <p class="lead text-center">Use the map to find local volunteering opportunities and meet-ups!</p>
         <p class="h2 text-center"> Visit Us </p>
         <p class="lead text-center"> 3242 Parkside Center Circle
          Tampa, FL 33619-0907
         </p>

      </div>
        <div class='container'>
          <div id='map' style={{ flex: 1, height: 800 }}> </div>
        </div>
        <LandingFoot />
      </div>
    );
  }

}

export default MapWrapper;
