import React from 'react';
import { withStyles  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import BotonCronometro from './CronometroComplementos/BotonCronometro';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { withRouter, Link } from "react-router-dom";
import TimerTwoToneIcon from '@material-ui/icons/TimerTwoTone';
import Grid from "@material-ui/core/Grid";


class Cronometro extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      contador:0,
      estado:"Iniciar"
    }
    this.handleContadorplus= this.handleContadorplus.bind(this);
    this.handleContadorminus= this.handleContadorminus.bind(this);
    this.aumentar= this.aumentar.bind(this);
    
  }

  handleContadorplus(){
    if (this.state.estado==="Iniciar"){
      this.setState({
        estado: "Pausa"
      });
      this._interval=setInterval(this.aumentar,1000);
      }
    else if (this.state.estado==="Pausa"){
        this.setState({
          estado: "Iniciar"
      });
      clearInterval(this._interval);
    }

  }
  aumentar(){
    if(this.state.estado==="Pausa"){
      this.setState({
        contador: this.state.contador+1
      });
    }
  }
  handleContadorminus(){
    this.setState({
      contador: 0,
      estado:"Iniciar"
    });
    clearInterval(this._interval);
  }
  
  render() {
    
    return (
      <Card>
        <CardContent>
          <Grid spacing={10}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item>
            <Typography  color="textSecondary" gutterBottom>
              <TimerTwoToneIcon />
            </Typography>
            </Grid>
            <Grid item>


            <h1>{this.state.contador}</h1>
            </Grid>
          </Grid> 
        </CardContent>
        <CardActions>
          <Grid spacing={10}
           container
           direction="row"
           justify="center"
           alignItems="center">
            <ButtonGroup color="primary" aria-label="outlined primary button group" 
            style={{ position: "relative", margin: "50px" }}>
              <BotonCronometro text={this.state.estado}  className="btn btn-success" onClick={this.handleContadorplus}/>
              <BotonCronometro text="Detener"  className="btn btn-danger" onClick={this.handleContadorminus}/> 
            </ButtonGroup>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}
export default Cronometro;
