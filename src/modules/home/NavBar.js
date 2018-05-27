import React from "react";
import { Link } from "react-router-dom";
import { aboutSections } from "../transitions";

export default () => (
  <div className="menu p-3">
    <div className="btn-group btn-group-sm" role="group">
      <Link to={{ pathname: `/home`, state: aboutSections }}>
        <button type="button" className="btn btn-secondary px-3">01 HOME</button>
      </Link>
      <Link to={{ pathname: `/home/personal`, state: aboutSections }}>
        <button type="button" className="btn btn-secondary px-3">02 PERSONAL</button>
      </Link>
      <Link to={{ pathname: `/home/interests`, state: aboutSections }}>
        <button type="button" className="btn btn-secondary px-3">03 INTERESTS</button>
      </Link>
      <Link to={{ pathname: `/home/connect`, state: aboutSections }}>
        <button type="button" className="btn btn-secondary px-3">04 CONNECT</button>
      </Link>
    </div>
  </div>
)