import React from "react";
import { Link } from "react-router-dom";
import { aboutToAbout } from "../transitions";

export default () => (
  <div className="menu mt-5 pt-5">
    <div className="btn-group btn-group-sm" role="group">
      <Link to={{ pathname: `/home`, state: aboutToAbout }}>
        <button type="button" className="btn btn-secondary active px-3">01 HOME</button>
      </Link>
      <Link to={{ pathname: `/home/personal`, state: aboutToAbout }}>
        <button type="button" className="btn btn-secondary px-3">02 PERSONAL</button>
      </Link>
      <Link to={{ pathname: `/home/interests`, state: aboutToAbout }}>
        <button type="button" className="btn btn-secondary px-3">03 INTERESTS</button>
      </Link>
      <Link to={{ pathname: `/home/connect`, state: aboutToAbout }}>
        <button type="button" className="btn btn-secondary px-3">04 CONNECT</button>
      </Link>
    </div>
  </div>
)