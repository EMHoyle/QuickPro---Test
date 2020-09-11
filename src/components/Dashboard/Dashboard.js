import React from 'react';
import clsx from 'clsx';
import DStyles from './DStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export default function Dashboard() {
  const classes = DStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Métricas */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {/* <Métricas /> */}
              </Paper>
            </Grid>
            {/* Estatus */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Estatus /> */}
              </Paper>
            </Grid>
            {/* Órdenes */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Ordenes /> */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}