import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './profilecss.css';
import * as serviceWorker from '../../serviceWorker';
import Story from "../../components/patientStory/Story";
import MapWrapper from "../../components/mapPage/MapWrapper";
import About from "../../components/About/About";
import { Link } from "react-router-dom";
import LandingFoot from '../landingPage/LandingFoot';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      leaderboard: null,
      badges: null,
    };
  }

  componentDidMount() {
    fetch('https://s6voi0zui1.execute-api.us-east-2.amazonaws.com/Dev/leaderboard')
      .then(res => res.json())
      .then((data) => {
        this.setState({ leaderboard: data })
      })
      .catch(console.log)
    fetch('https://s6voi0zui1.execute-api.us-east-2.amazonaws.com/Dev/badges', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username: 'Jane',
      })
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ badges: data })
      })
      .catch(console.log)
  }

  render() {
    var profileState = this.state
    function Leaderboard() {
      if (!profileState.leaderboard) {
        return null

      }
      console.log(profileState.leaderboard['entries'])
      let a = "<table width=\"1000\" cellspacing=\"5\" align=\"center\">" +
            "<thead>" +
              "<tr>" +
                "<th font-size: 22px >Score Leaderboard</th> <th ></th>" +
              "</tr>" + 
            "</thead>" +
            "<tbody>"
      {
        profileState.leaderboard['entries'].forEach(entry => {
          console.log("Entered");
          a = a +
              "<tr>"+ 
                "<td bgcolor=\"#ffffff\" >" + entry.name + "</td>" +
                "<td bgcolor=\"#ffffff\">" +  entry.score + "</td>" + 
              "</tr>"

        })
      }
      a += "</tbody></table>"
      return (<div dangerouslySetInnerHTML={{ __html: a }} />
      )
    }

    function Badges() {
      if (!profileState.badges) {
        return null
      }
      console.log(profileState.badges)
      let a = ""
      {
        profileState.badges.forEach(badge => {
          console.log("Entered");
          a = a +
        "<div class=\"column\">" +
          "<img src=\"" + badge.imageURL + "\" alt=\"" + badge.name + "\" width=\"50\" />" + 
        "</div>"


        })
      }
      return (<div dangerouslySetInnerHTML={{ __html: a }} />
      )
    }


    return (
      <div className="profilePage">

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






      <div className="container">

        <div class="card">
          {/* <img src="" alt="alt" style="width:100%" /> */}
          <h1>Jane Doe</h1>
          <p class="title">Title: Volunteer</p>
          <p>Point Total: 152</p>
        </div>
        <Leaderboard />


    <hr/>
    <h2>Badges</h2>
    
    <div class="row">
        <Badges />
    </div>
    
    </div>
    <LandingFoot />
      </div>
    )
  }


}




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
export default Profile;
