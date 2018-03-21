import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class customFooter extends Component {
  
      render() {
        return (
            <Navbar fixedBottom>
                <p>I am a footer</p>
            </Navbar>
        );
      }
  }