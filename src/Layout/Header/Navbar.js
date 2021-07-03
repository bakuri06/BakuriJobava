import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: '99999',
    opacity:0.8
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
  },
  paint: {
    backgroundColor: 'white',
    color: 'black'
  },
  button:{
      color: 'black',
      borderColor: 'black',
      borderRadius: 16
    }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.paint} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              <i className="fab fa-mdb fa-3x" alt="mdb logo"></i>
          </Typography>
          <ul className='flexed'>
            <li>
              <a href="#!">
                <span >1</span>
                <i className="fas fa-shopping-cart pl-0"></i>
              </a>
            </li>
            <li >
              <a href="#!">
                Shop
              </a>
            </li>
            <li >
              <a href="#!">
                Contact
              </a>
            </li>
            <li>
              <a href="#!">
                Sign in
              </a>
            </li>
            <li >
              <Button variant='outlined' className={classes.button}>
                Sign Up
              </Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
