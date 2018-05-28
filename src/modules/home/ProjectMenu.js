import React, { Component } from "react";
import { Link } from "react-router-dom";
import { aboutToPreview, aboutToAbout } from "../transitions"
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class ProjectMenu extends Component {

  constructor(props) {
        super(props);
        this.state = {         
            isHidden: true,
            animate: false,          
        };

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu() {
        this.setState({ isHidden: !this.state.isHidden });
        this.setState({ animate: !this.state.animate });
    }

  render () {

    let animateClass = this.state.animate ? 'slide-bottom' : '';

    return (
      <div className="right-side projects p-5">
        <div className="pl-5">
          <h3 className="pb-3"
            onClick={this.showMenu}>
            + RECENT WORKS
          </h3>

          {!this.state.isHidden &&

            <div className="pt-5 btn-group-vertical btn-group-sm" role="group">
              <Link to={{ pathname: `/preview/dynamo`, state: aboutToPreview }}>
                <button type="button" className={`one ${animateClass} btn px-3 py-2`}><b>01  </b>DYNAMO</button>
              </Link>
              <button type="button" className={`two ${animateClass} btn px-3 py-2`}><b>02  </b>CAPTIS</button>
              <button type="button" className={`three ${animateClass} btn px-3 py-2`}><b>03  </b>BURRIS</button>
              <button type="button" className={`four ${animateClass} btn px-3 py-2`}><b>04  </b>HACKATHON</button>
              <button type="button" className={`five ${animateClass} btn px-3 py-2`}><b>05  </b>OTHER</button>
              <button type="button" className={`six ${animateClass} btn px-3 py-2`}><b>←  </b>BACK</button>
            </div>
          }
          
        </div>
      </div>
    )
  }
}

export default ProjectMenu;
