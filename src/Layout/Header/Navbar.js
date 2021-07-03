import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:'fixed',
    width:'100%',
    zIndex:'99999'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paint:{
    backgroundColor:'white',
    color:'black'
  }

}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.paint}position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MDB
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
              <a href="#!" type="button" >Sign
                up</a>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
