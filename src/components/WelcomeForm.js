import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    },
    minWidth: 275
  }
}));

export default function WelcomeForm() {
  const classes = useStyles();

  return (
    <Card className={classes.root.minWidth} variant='outlined'>
      <CardContent>
        <form className={classes.root} noValidate autoComplete='off'>
          <div>
            <TextField
              required
              id='standard-required'
              label='First Name'
              //   defaultValue='Sally'
            />
            <TextField
              required
              id='standard-required'
              label='Last Name'
              //   defaultValue='May'
            />
          </div>
          <div>
            <TextField
              id='standard-basic'
              label='Title'
              //   defaultValue='Software Engineer'
            />
            <TextField
              id='standard-basic'
              label='Years of experience'
              //   defaultValue='2'
            />
          </div>
        </form>
      </CardContent>
      <CardActions>
        <Button size='small'>Start Test</Button>
      </CardActions>
    </Card>
  );
}
