import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { styles } from '../utils/styles/styles';
import { withStyles } from '@material-ui/core/styles';


class Persona extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ padding: 10 }}>
        <h4>Persona</h4>
        <Grid container direction="column">
          <Grid item xs>
            <TextField label="nombre" className={classes.textField} />
            <TextField label="email" className={classes.textField} />
          </Grid>
          <Grid item xs>
            <TextField label="sueldo" className={classes.textField} />
          </Grid>
          <Grid item xs>
            <Grid container>
              <Grid item xs={3} />
              <Grid item xs={1}><Button variant="contained">Aceptar</Button></Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Persona);