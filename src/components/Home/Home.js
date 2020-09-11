import React from 'react';
import HStyles from './HStyles';
import HomeContent from './HomeContent';

const Home = () => {
  const classes = HStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
            <div className={classes.toolbar}>
              <HomeContent/>
            </div>
      </main>
    </div>
  );
}

export default Home;