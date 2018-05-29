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
      <div className="d-flex align-items-end">
        <div className="d-flex justify-content-center">
          <div className="right-side projects ml-5 pl-5">
            <div className="pl-5">
              <h3 className="menu pb-3"
                onClick={this.showMenu}>
                + RECENT WORK
              </h3>

              {!this.state.isHidden &&

                <div className="pt-5 btn-group-vertical btn-group-sm" role="group">
                  <Link to={{ pathname: `/preview/dynamo`, state: aboutToPreview }}>
                    <button type="button" className={`one ${animateClass} btn`}><strong>01  </strong>DYNAMO</button>
                  </Link>
                  <Link to={{ pathname: `/preview/captis`, state: aboutToPreview }}>
                    <button type="button" className={`two ${animateClass} btn`}><strong>02  </strong>CAPTIS</button>
                  </Link>
                  <Link to={{ pathname: `/preview/burris`, state: aboutToPreview }}>
                    <button type="button" className={`three ${animateClass} btn`}><strong>03  </strong>BURRIS</button>
                  </Link>
                  <Link to={{ pathname: `/preview/hackathon`, state: aboutToPreview }}>
                    <button type="button" className={`four ${animateClass} btn`}><strong>04  </strong>HACKATHON</button>
                  </Link>
                  <Link to={{ pathname: `/other`, state: aboutToPreview }}>
                    <button type="button" className={`five ${animateClass} btn`}><strong>05  </strong>OTHER</button>
                  </Link>
                  <Link to={{ pathname: `/home`, state: aboutToPreview }}>
                    <button type="button" className={`six ${animateClass} btn`}><strong>←  </strong>BACK</button>
                  </Link>
                </div>
              }
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectMenu;
