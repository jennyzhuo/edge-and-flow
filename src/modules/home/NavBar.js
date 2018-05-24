import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default ({ history }) => (
  <div className="menu p-3">
    <div className="btn-group btn-group-sm" role="group">
      <Link to="/home">
        <button type="button" className="btn btn-secondary px-3">01 HOME</button>
      </Link>
      <Link to="/dynamo">
        <button type="button" className="btn btn-secondary px-3">02 PERSONAL</button>
      </Link>
      <Link to="/interests">
        <button type="button" className="btn btn-secondary px-3">03 INTERESTS</button>
      </Link>
      <Link to="/connect">
        <button type="button" className="btn btn-secondary px-3">04 CONNECT</button>
      </Link>
    </div>
  </div>
)