import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WebCard.scss";

const WebCard = props => (
  <Card>
    <CardActionArea>
        <CardMedia image={props.titleBanner}/>
    </CardActionArea>

  </CardMedia>
);

export default WebCard;