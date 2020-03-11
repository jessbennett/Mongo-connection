import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { response } from 'express';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, FirstName, LastName) {
  return { name, FirstName, LastName };
}

const rows = [
  createData('Jonny'),
  createData('Robert'),
  createData('Susan'),
  createData('Frank'),
  createData('Sammy')
];

export default function NameTable() {
  const classes = useStyles();
  const makeUser = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/add_user/jessica/bennett',
        {
          method: 'POST',
          body: JSON.stringify({ firstName: 'jessica', lastName: 'bennett' })
        }
      );
      const { data } = response;
      console.log({ response, data });
      return response;
    } catch (error) {
      console.log({ error });
      return error;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>User's Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.FirstName}</TableCell>
              <TableCell>{row.LastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant='contained' onClick={() => makeUser()}>
        work
      </Button>
    </TableContainer>
  );
}
