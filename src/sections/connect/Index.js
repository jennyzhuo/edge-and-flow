/**
 * Created by jennyzhuo on 4/1/18.
 */
import React, { Component } from "react";
import { connect } from "react-redux";

@connect(() => {})

class Connect extends Component {

  render() {

    return (
      <div className="controls">
        this works
      </div>
    );
  }
}

export default Connect;