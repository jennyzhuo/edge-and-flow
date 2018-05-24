import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="menu p-3">
    <div className="btn-group btn-group-sm" role="group">
      <Link to={`/home`}>
        <button type="button" className="btn btn-secondary px-3">01 HOME</button>
      </Link>
      <Link to={`/home/personal`}>
        <button type="button" className="btn btn-secondary px-3">02 PERSONAL</button>
      </Link>
      <Link to={`/home/interests`}>
        <button type="button" className="btn btn-secondary px-3">03 INTERESTS</button>
      </Link>
      <Link to={`/home/connect`}>
        <button type="button" className="btn btn-secondary px-3">04 CONNECT</button>
      </Link>
    </div>
  </div>
)