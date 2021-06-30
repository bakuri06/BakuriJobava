import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

export default function MainContent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={4} spacing={3}>
                    <Card />
                </Grid>
                <Grid container item xs={4} spacing={3}>
                    <Card />
                </Grid>
                <Grid container item xs={4} spacing={3}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    );
}
