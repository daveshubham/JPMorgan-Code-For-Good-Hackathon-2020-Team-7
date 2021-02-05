import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./footer.css";

function LandingFoot() {
  return (
    <div className="foot">
        <footer id="footer" className="bg-light mt-5">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
              <div className="container">
                      <div className="footer-wrapper">
                  <div className="row">                    
                    <div className="col-md-3 col-sm-3">
                      <a href="" className="footerLogo">The ALS Association</a>
                      <ul className="social-icons">
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-xing"></i></a></li>
                          <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <h5>For individuals</h5>
                      <ul className="footer-links">
                        <li><a href="">Signup</a></li>
                        <li><a href="">login</a></li>
                        <li><a href="">Explore</a></li>
                        <li><a href="">Finder app</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Language settings</a></li>
                      </ul>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <h5>For businesses</h5>
                      <ul className="footer-links">
                        <li><a href="">Business signup</a></li>
                        <li><a href="">Business login</a></li>
                        <li><a href="">Benefits</a></li>
                        <li><a href="">Resources</a></li>
                        <li><a href="">Advertise</a></li>
                        <li><a href="">Setup</a></li>
                      </ul>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <h5>About</h5>
                      <ul className="footer-links">
                        <li><a href="">About us</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms</a></li>
                        <li><a href="">Help</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <h5>Contact Us</h5>
                      <ul className="contact">
                        <li><i className="fa fa-phone"></i>+1 (234) 123 1234</li>
                        <li><i className="fa fa-envelope-o"></i>info@company.com</li>
                        <li><i className="fa fa-home"></i>Florida, USA</li>
                      </ul>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="clearfix"></div>
              <div className="copyright">
                <p>Company © 2020. All rights reserved</p>
              </div>
                </footer>
    </div>
  );
}

export default LandingFoot;