import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  },
  card: {
    minWidth: 275
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h1' gutterBottom>
        Enter your name to be added to the database
      </Typography>
      <Grid
        container
        spacing={0}
        align='center'
        justify='center'
        direction='column'
      >
        <Grid item>
          <Card className={classes.Card}>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField id='standard-basic' label='First Name' />
              <TextField id='filled-basic' label='Last Name' variant='filled' />
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

// export default App;
