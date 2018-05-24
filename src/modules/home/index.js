import React from "react";
import NavBar from './NavBar';
import Intro from './intro';
import Personal from './personal';
import Skills from './skills';
import Connect from './connect';
import ProjectMenu from './ProjectMenu';
import Content from './Content';
import { Route } from 'react-router-dom'

export default ({ ...props }) => (
  [
    <Content {...props} />,
    <ProjectMenu/>
  ]
)

