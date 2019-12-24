import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class App extends Component {
  state = {
    data: null
  };

  async componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div>
        <Typography variant='h4' gutterBottom>
          Follow the commands, then see your input in Mongo
        </Typography>
        <Grid
          container
          spacing={0}
          align='center'
          justify='center'
          direction='column'
        >
          <Grid item>
            <Card>
              <form noValidate autoComplete='off'>
                <TextField id='standard-basic' label='First Name' />
                <TextField
                  id='filled-basic'
                  label='Last Name'
                  variant='filled'
                />
              </form>
            </Card>
          </Grid>
          <p>{this.state.data}</p>
        </Grid>
        <Divider orientation='vertical' />
      </div>
    );
  }
}
export default App;
