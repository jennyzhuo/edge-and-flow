/**
 * Created by jennyzhuo on 4/1/18.
 */
import React, { Component } from "react";
import { connect } from "react-redux";

@connect(() => {})

class Main extends Component {

  render() {

    return (
      <div className="test">
        <div>
          main main
        </div>
      </div>
    );
  }
}

export default Main;
