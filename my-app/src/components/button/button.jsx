import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./button.css";



export default class customButton extends Component {
    constructor(props, context) {
        super(props, context);
    
    
        this.state = {
          bsStyle: 'warning'
        };
      }

    render(){
        return(
          <div>
            <button className="exampleButton">Example</button>
          </div>
        )
        }
    }