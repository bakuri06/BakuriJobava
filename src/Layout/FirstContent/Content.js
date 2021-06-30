import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function FirstContent() {
    const useStyles = makeStyles({
        root: {
            width: '400px',
            margin: "0 auto",
            textAlign: 'center'
        }
    });

    const classes = useStyles();
    return (
        <Box classes={{ root: classes.root }} component="div" display="flex" flexDirection="column" alignItems="center" m={1}>
            <h1>Album Layout</h1>
            <p>Something short and leading about the collection below its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don't simply skip over it entirely.
            </p>
        </Box>
    );
}