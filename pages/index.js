import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";

const IndexView = () => (
  <Layout>
    <Container className="container">
      <Grid container justify="center">
        <Grid item className="gridItem">
          <Paper elevation={5} className="paperContainer">
            <div>TITLE</div>
            <hr></hr>
            <div>body</div>
            <div>footer buttons</div>
          </Paper>
        </Grid>
        <Grid item className="gridItem">
          <Paper elevation={5} className="paperContainer">
            <div>TITLE</div>
            <hr></hr>
            <div>body</div>
            <div>footer buttons</div>
          </Paper>
        </Grid>
        <Grid item className="gridItem">
          <Paper elevation={5} className="paperContainer">
            <div>TITLE</div>
            <hr></hr>
            <div>body</div>
            <div>footer buttons</div>
          </Paper>
        </Grid>
        <Grid item className="gridItem">
          <Paper elevation={5} className="paperContainer">
            <div>TITLE</div>
            <hr></hr>
            <div>body</div>
            <div>footer buttons</div>
          </Paper>
        </Grid>
        <Grid item className="gridItem">
          <Paper elevation={5} className="paperContainer">
            <div>TITLE</div>
            <hr></hr>
            <div>body</div>
            <div>footer buttons</div>
          </Paper>
        </Grid>
        <Grid item className="gridItem">
          <Paper elevation={5} className="paperContainer">
            <div>TITLE</div>
            <hr></hr>
            <div>body</div>
            <div>footer buttons</div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default IndexView;
