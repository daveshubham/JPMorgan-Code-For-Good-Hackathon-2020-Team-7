import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Story from "./components/patientStory/Story";
import About from "./components/About/About";
import MapWrapper from "./components/mapPage/MapWrapper";
import Profile from "./components/profilePage/Profile";
import Story1 from './components/story1/story1';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import L from 'leaflet'

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <Router>
    <Switch>
     <Route exact path="/" component={App} />
     <Route path="/story" component={Story} />
     <Route path="/map" component={MapWrapper} />
     <Route path="/About" component={About} />
     <Route path="/profile" component={Profile} />
     <Route path="/story1" component={Story1} /> 
   </Switch>
   </Router>,
   rootElement
 );



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
