import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Jumbotron, Row, Col } from "react-bootstrap";

import Button from "../../components/button/button";
import CustomModal from "../../components/modal/modal";

export default class home extends Component {
  
      render() {
        return (
          
          <Grid>
            <Jumbotron>
              <h2>Home Page</h2>
              <p>This is my home page</p>
            </Jumbotron>
          <Row className="buttonRow">
            <Col md={6}>
              <Button />
            </Col>
            <Col md={6}>
              <CustomModal />
            </Col>
            </Row>
          </Grid>

        );
      }
  }