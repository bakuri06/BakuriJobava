import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 400,
  },
  border:{
    borderBottom:'0px'
  }
});

function createData(model, color, delivery) {
  return { model, color, delivery};
}

const rows = [
  createData('Model', "Shirt 5407X"),
  createData('Color', "Blue"),
  createData('Delivery', "USA, Europe")
];

export function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.table} aria-label="simple table">

        <TableBody key={4134}>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell classes={{root:classes.border}} component="th" scope="row">
                {row.model}
              </TableCell>
              <TableCell classes={{root:classes.border}} align="left">{row.color}</TableCell>
              <TableCell classes={{root:classes.border}} align="right">{row.delivery}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function AnotherTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.table} aria-label="simple table">

        <TableBody>
            <TableRow>
              <TableCell classes={{root:classes.border}} component="th" scope="row">
                Quantity
              </TableCell>
              <TableCell classes={{root:classes.border}} align="left">Select Size</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
