import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WebCard.scss";

const WebCard = props => (
  <Paper elevation={5} className="paperContainer">
    <div><img src="{props.titleLogo}"/></div><div className="titleDiv">{props.title}</div>
<div>{props.children}</div>
    <div>footer buttons</div>
  </Paper>
);

export default WebCard;