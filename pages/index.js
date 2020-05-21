import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";
import WebCard from "../components/WebCard";

const IndexView = () => (
  <Layout>
    <Container className="container">
      <Grid container justify="center">
        <Grid item className="gridItem">
          <WebCard
            title="Card One"
            titleBanner="./projects-banner.png"
            moreLink="">
            Body Content
          </WebCard>
        </Grid>
        <Grid item className="gridItem">
          <WebCard
            title="Card Two"
            titleLogo=""
            moreLink="">
            Body Content
          </WebCard>
        </Grid>
        <Grid item className="gridItem">
          <WebCard
            title="Card Three"
            titleLogo=""
            moreLink="">
            Body Content
          </WebCard>
        </Grid>
        <Grid item className="gridItem">
          <WebCard
            title="Card Four"
            titleLogo=""
            moreLink="">
            Body Content
          </WebCard>
        </Grid>
        <Grid item className="gridItem">
          <WebCard
            title="Card Five"
            titleLogo=""
            moreLink="">
            Body Content
          </WebCard>
        </Grid>
        <Grid item className="gridItem">
          <WebCard
            title="Card Six"
            titleLogo=""
            moreLink="">
            Body Content
          </WebCard>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default IndexView;
