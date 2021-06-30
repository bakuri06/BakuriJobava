import React from 'react';
import './App.css'
import Bar from './Layout/Header/Bar';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FirstContent from './Layout/FirstContent/Content'
import MainContent from './Layout/MainContent/MainContent';

const App = () => {
  const useStyles = makeStyles({
    root: {
      paddingLeft: "10px",
      paddingRight: "10px",
    }
  });

  const classes = useStyles();

  return (
    <div>
      <Container classes={{ root: classes.root }} maxWidth="xl">
        <Bar />
      </Container>
      <>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FirstContent />
            </Grid>
            <MainContent />
          </Grid>
        </Container>
      </>
    </div>
  )
};

export default App;