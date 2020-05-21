import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";

const IndexView = () => (
  <Layout>
    <Container className="container">
      <Grid container justify="center">
          <Grid item className="gridItem">
            HELLO
          </Grid>
          <Grid item className="gridItem">
            HELLO
          </Grid>
          <Grid item className="gridItem">
            HELLO
          </Grid>
          <Grid item className="gridItem">
            HELLO
          </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default IndexView;
