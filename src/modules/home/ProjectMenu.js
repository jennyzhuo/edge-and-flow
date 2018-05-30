import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { aboutToPreview, aboutToAbout } from "../transitions"
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import * as actions from './actions';

@connect(state => ({
  ...state.homeReducer
}), dispatch => ({
  actions: bindActionCreators(actions, dispatch)
  // setProjectMenuOpen: (isOpen) => dispatch(setProjectMenuOpen(isOpen))
}))
class ProjectMenu extends Component {

  constructor(props) {
        super(props);
        this.state = {         
            isHidden: true,
            // animate: false,
        };

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu() {
      // this.setState({ isHidden: !this.state.isHidden });
        // this.setState({ animate: !this.state.animate });
      // debugger;

      const { dispatch, actions } = this.props;
      console.log('hi');
      console.log("actions = ", actions);

      this.props.actions.setProjectMenuOpen()
    }

  render () {
    const { isProjectMenuOpen } = this.props;
    console.log("isProjectMenuOpen = ", this.props.isProjectMenuOpen);
    // let animateClass = this.state.animate ? 'slide-bottom' : '';
    // const animateClass = !this.state.isHidden ? 'slide-bottom' : '';
    const animateClass = isProjectMenuOpen ? 'slide-bottom' : '';

    return (
      <div className="d-flex align-items-end">
        <div className="d-flex justify-content-center">
          <div className="right-side projects ml-5 pl-5">
            <div className="pl-5">
              <h3 className="menu pb-3"
                onClick={() => {
                  console.log("clicking onclick");
                  this.showMenu()
                }}>
                + RECENT WORK
              </h3>

              {isProjectMenuOpen &&

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
