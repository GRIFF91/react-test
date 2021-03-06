import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

export default class customHeader extends Component {
  
      render() {
        return (
    
        <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                        About
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/contact" to="/contact">
                        Contact
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
        );
      }
  }
