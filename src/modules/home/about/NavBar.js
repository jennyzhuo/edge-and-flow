import React from "react";
import { Link } from "react-router-dom";
import { aboutToAbout } from "../../transitions/index";
import * as ROUTES from '../../../routes';

export default ({ location }) => {
  return (
    <div className="menu mt-5 pt-5">
      <div className="btn-group btn-group-sm" role="group">
        <Link to={{pathname: ROUTES.INTRO, state: aboutToAbout}}>
          <button type="button" className={`btn btn-secondary ${location.pathname === '/home' && 'active'} px-3`}>01 HOME</button>
        </Link>
        <Link to={{pathname: ROUTES.PERSONAL, state: aboutToAbout}}>
          <button type="button" className={`btn btn-secondary ${location.pathname === '/home/personal' && 'active'} px-3`}>02 PERSONAL</button>
        </Link>
        <Link to={{pathname: ROUTES.INTERESTS, state: aboutToAbout}}>
          <button type="button" className={`btn btn-secondary ${location.pathname === '/home/interests' && 'active'} px-3`}>03 INTERESTS</button>
        </Link>
        <Link to={{pathname: ROUTES.CONNECT, state: aboutToAbout}}>
          <button type="button" className={`btn btn-secondary ${location.pathname === '/home/connect' && 'active'} px-3`}>04 CONNECT</button>
        </Link>
      </div>
    </div>
  )
}