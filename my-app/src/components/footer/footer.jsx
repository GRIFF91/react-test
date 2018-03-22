import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

export default class customFooter extends Component {
  
      render() {
        return (
            <div className="footer fixed-bottom">
                <span>Byron Griffith &#169; {new Date().getFullYear()}</span>
            </div>
        );
      }
  }