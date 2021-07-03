import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/core';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
    menu: {
      backgroundColor: 'red',
    },
    noPadding:{
        paddingLeft: "0px",
        paddingRight: "0px",
        marginBottom:'30px'
    }
}));

const MainContent = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='xl' classes={{root:classes.noPadding}}>
                <Header />
            </Container>
            <Container>
                {children}
            </Container>

            <Footer />

        </>
    );
}

export default MainContent;