import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Component from "./Sagar/sagar";

console.log = function () {}
console.warn = function () {}
console.error = function () {}

function App() {
  return ( <
    Router >
    <
    div className = "App" >
    <
    h1 > Working < /h1> <
    Switch >
    <
    Route path = '/sagar'
    exact >
    <
    Component / >
    <
    /Route>

    <
    Route path = '/jigar'
    exact >
    <
    Component / >
    <
    /Route>

    <
    Route path = '/breej'
    exact >
    <
    Component / >
    <
    /Route>

    <
    Route path = '/nishant'
    exact >
    <
    Component / >
    <
    /Route>

    <
    Route path = '/Raj'
    exact >
    <
    Component / >
    <
    /Route> <
    /Switch>

    <
    /div> <
    /Router>

  );
}

export default App;