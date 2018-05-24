import React from "react";
import NavBar from './NavBar';
import Intro from './intro';

export default ({ history }) => (
  <div className="left-side home p-5">
    {/*<div className="p-3">*/}
      {/*<h1>EDGE & FLOW</h1>*/}
      {/*<h4 className="pb-3">*/}
        {/*UI UX DESIGN  //  GRAPHIC DESIGN  //  PAINTER  //  ILLUSTRATOR*/}
      {/*</h4>*/}
      {/*<p>*/}
        {/*I love the thought that creativity can solve any problem, and so,*/}
        {/*the creative process is always on my mind.  Making products as attractive*/}
        {/*& well formed as they are effective is where I apply myself.*/}
        {/*I am currently looking to join a team where quality work comes*/}
        {/*from the cross-pollination of each other's enthusiasm.*/}
      {/*</p>*/}
    {/*</div>*/}
    <Intro />
    <NavBar history={history} />
  </div>
)

