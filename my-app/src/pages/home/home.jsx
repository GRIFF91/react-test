import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Jumbotron } from "react-bootstrap";

export default class home extends Component {
  
      render() {
        return (
          
          <Grid>
            <Jumbotron>
              <h2>Home Page</h2>
              <p>This is my home page</p>
            </Jumbotron>
          </Grid>

        );
      }
  }