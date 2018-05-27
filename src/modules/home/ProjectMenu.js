import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="right-side projects p-5">
    <div className="menu pl-5">
      <h3 className="pb-3">+ RECENT WORKS</h3>
      <div className="pt-5 btn-group-vertical btn-group-sm" role="group">
        <Link to={`/preview/dynamo`}>
          <button type="button" className="btn px-3 py-2"><b>01  </b>DYNAMO</button>
        </Link>
        <button type="button" className="btn px-3 py-2"><b>02  </b>CAPTIS</button>
        <button type="button" className="btn px-3 py-2"><b>03  </b>BURRIS</button>
        <button type="button" className="btn px-3 py-2"><b>04  </b>HACKATHON</button>
        <button type="button" className="btn px-3 py-2"><b>05  </b>NORASACK DESIGN</button>
        <button type="button" className="btn px-3 py-2"><b>06  </b>OTHER</button>
        <button type="button" className="btn px-3 py-2"><b>←  </b>BACK</button>
      </div>
    </div>
  </div>
)