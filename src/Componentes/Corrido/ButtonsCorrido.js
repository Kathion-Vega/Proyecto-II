import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const styles ={
  primary: {
    
  },
  secondary: {
    
    color: 'white'
  },
  spaceTop: {
    marginTop: 20
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
     
    },
  },
}

class ButtonsCorrido extends Component {

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <ButtonGroup size="small" aria-label="small outlined button group">
            
                <Button
                variant="text"
                className={classes.primary}
                >
                Refrescar
                </Button>
                <Button
                variant="contained"
                color="primary"
                className={classes.secondary}
                >
                Corregir
                </Button>
            </ButtonGroup>
        </div>
    )
  }
}

export default withStyles(styles)(ButtonsCorrido);