// <Link to={{ pathname: `/other`, state: aboutToPreview }}>
//   <button type="button" className={`five ${animateClass} btn`}><strong>05  </strong>OTHER</button>
// </Link>

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { aboutToPreview, previewToAbout } from "../transitions"
import * as actions from './actions';
import * as ROUTES from '../../routes';

@connect(state => ({
  ...state.homeReducer
}), dispatch => ({
  actions: bindActionCreators(actions, dispatch)
}))
class ProjectMenu extends Component {

  constructor(props) {
        super(props);
        this.state = {         
            isHidden: true,
        };

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu() {
      this.props.actions.setProjectMenuOpen()
    }

  render () {
    const { isProjectMenuOpen } = this.props;
    const animateClass = isProjectMenuOpen ? 'slide-bottom' : '';

    return (
      <div className="d-flex align-items-end">
        <div className="d-flex justify-content-center">
          <div className="right-side projects">
            <div className="pl-5">
              <h3 className="menu pb-3"
                onClick={() => {this.showMenu()}}>
                + RECENT WORK
              </h3>

              {isProjectMenuOpen &&

                <div className="pt-5 btn-group-vertical btn-group-sm" role="group">
                  <Link to={{ pathname: ROUTES.DYNAMO_PREVIEW, state: aboutToPreview }}>
                    <button type="button" className={`one ${animateClass} btn`}><strong>01  </strong>DYNAMO</button>
                  </Link>
                  <Link to={{ pathname: ROUTES.CAPTIS_PREVIEW, state: aboutToPreview }}>
                    <button type="button" className={`two ${animateClass} btn`}><strong>02  </strong>CAPTIS</button>
                  </Link>
                  <Link to={{ pathname: ROUTES.BURRIS_PREVIEW, state: aboutToPreview }}>
                    <button type="button" className={`three ${animateClass} btn`}><strong>03  </strong>BURRIS</button>
                  </Link>
                  <Link to={{ pathname: ROUTES.HACKATHON_PREVIEW, state: aboutToPreview }}>
                    <button type="button" className={`four ${animateClass} btn`}><strong>04  </strong>HACKATHON</button>
                  </Link>
                  
                  <Link to={{ pathname: ROUTES.INTRO, state: previewToAbout }}>
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
