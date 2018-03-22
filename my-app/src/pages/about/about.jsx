import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Panel } from "react-bootstrap";
import "./about.css";

export default class about extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        open: true
      };
    }
  
    render() {
      return (
        <div className="quoteDiv">
          <Button onClick={() => this.setState({ open: !this.state.open })}>
            Click to toggle Bob Ross quotes!
          </Button>
          <br />
          <Panel id="collapsible-panel-about-1" expanded={this.state.open}>
            <Panel.Collapse>
              <Panel.Body>
                <p>
                  Nice little clouds playing around in the sky. Just beat the devil out of it. 
                  I want everybody to be happy. That's what it's all about. Isn't that fantastic 
                  that you can create an almighty tree that fast? Just relax and let it flow. That easy.
                </p>
                <p>
                  Look around, look at what we have. Beauty is everywhere, you only have to look to see it. 
                  Be careful. You can always add more - but you can't take it away. It's almost like something 
                  out of a fairytale book. Fluff it up a little and hypnotize it. The shadows are just like the 
                  highlights, but we're going in the opposite direction. There's not a thing in the world wrong 
                  with washing your brush.
                </p>
                <p>
                  If you hypnotize it, it will go away. You are only limited by your imagination. Let's build an 
                  almighty mountain. Brown is such a nice color. Let your heart be your guide.
                </p>
                <p>
                  In your world you have total and absolute power. There is immense joy in just watching - watching 
                  all the little creatures in nature. If you overwork it you become a cloud killer. There's nothing 
                  worse than a cloud killer.
                </p>
                <p>
                  If you don't like it - change it. It's your world. Every single thing in the world has its own 
                  personality - and it is up to you to make friends with the little rascals. All kinds of happy little 
                  splashes. This painting comes right out of your heart. We'll lay all these little funky little things
                  in there.
                </p>
                <p>
                  Everyone is going to see things differently - and that's the way it should be. Maybe he has a
                  little friend that lives right over here. Be brave.
                </p>
                <p>
                  Everyone needs a friend. Friends are the most valuable things in the world. There is no right
                  or wrong - as long as it makes you happy and doesn't hurt anyone. If there's two big trees invariably
                  sooner or later there's gonna be a little tree.
                </p>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
      );
    }
  }
  
  ;