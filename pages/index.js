import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";


const IndexView = () => (
  <Layout>
  <div className="{flexGrow: 1}">
  <Grid container spacing={3}>
    <Grid item xs>
      <Paper className="{padding: 2,textAlign: 'center', color: black}">xs</Paper>
    </Grid>
    <Grid item xs>
      <Paper className="{padding: 2,textAlign: 'center', color: black}">xs</Paper>
    </Grid>
    <Grid item xs>
      <Paper className="{padding: 2,textAlign: 'center', color: black}">xs</Paper>
    </Grid>
  </Grid>
  <Grid container spacing={3}>
    <Grid item xs>
      <Paper className="{padding: 2,textAlign: 'center', color: black}">xs</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className="{padding: 2,textAlign: 'center', color: black}">xs=6</Paper>
    </Grid>
    <Grid item xs>
      <Paper className="{padding: 2,textAlign: 'center', color: black}">xs</Paper>
    </Grid>
  </Grid>
</div>
  </Layout>
);

export default IndexView;