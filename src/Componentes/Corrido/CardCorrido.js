
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import ButtonsCorrido from './ButtonsCorrido.js';
import InputsCorrido from  './InputsCorrido.js';
import Grid from "@material-ui/core/Grid";


const styles = {
  paper: {
    
    textAlign: 'left',
    
  },
  avatar: {
    margin: 10,
  
  },
  avatarContainer: {
   
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  baseline: {
    alignSelf: 'baseline',
    
   
  },
  inline: {
    display: 'inline-block',
   
  },
  inlineRight: {
    width: '30%',
    textAlign: 'right',
    marginLeft: 50,
    alignSelf: 'flex-end',
   
  },
  
};

class CardCorrido extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <div className={classes.itemContainer}>
            <div className={classes.baseline}>
              <div className={classes.inline}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Primera Operación
                </Typography>
                <Typography variant="h6" gutterBottom>
                  3 + 5 =
                </Typography>
              </div>
              <div className={classes.inline}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Segunda Operación
                </Typography>
                <Typography variant="h6" gutterBottom>
                  ____ - 7 =
                </Typography>
              </div>
              <div className={classes.inlineRight}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Tercera Operación
                </Typography>
                <Typography variant="h6" gutterBottom>
                  ____ * 6 = 
                </Typography>
              </div>
            </div>
            <div className={classes.inlineRight}>
              <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                Resultado
              </Typography>
              <Typography variant="h6" gutterBottom>
                  ____ 
              </Typography>
              <ButtonsCorrido />
            </div>
            
          </div>
     
        </Grid>
        
      </div>
    )
  }
}

export default withStyles(styles)(CardCorrido);