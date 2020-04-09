import React, { Component }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cronometro from "./Complementos/Cronometro";
import Operaciones from "./Complementos/Operaciones";
import { withRouter, Link } from "react-router-dom";
import CorrecBoton from "./Complementos/CorrecBoton";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RestorePageRoundedIcon from '@material-ui/icons/RestorePageRounded';
const backgroundShape = require("../../imagenes/fondoCronos.svg");

const styles = {

  root: {
    flexGrow: 1,
  
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0",
    paddingBottom: 500
  },
  grid: {
    width: 1200,
    direction:"row",
    justify:"center",
    alignItems:"center",
    padding: 50,
   
    
    
  },
}

class Cronometrado extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            someValueThatTheUserChanges: 7,
            abc: 'a'
        };
        this.state = this.initialState;
    }
    onResetClick(e) {
        e.preventDefault();
        this.setState(this.initialState);
    }
    
    
    
    
    render() {
        const { classes } = this.props;  
    return (
    <React.Fragment>
        <CssBaseline />
        <Container width={1} >
            < h1>Cálculo Cronometrado</h1>
        </Container>
        <div className={this.props.classes.root} >
            <Grid container  justify="center"> 
                
                <Grid
                    spacing={0}
                    justify="space-around"
                    alignItems="center"
                    justify="center"
                    container
                    className={classes.grid}
                >
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={12} md={4}>
                            <Paper  className={classes.paper}
                                    style={{ position: "relative", marginBottom: "50px" }}>
                                
                    
                                <Cronometro/>
                            </Paper>
                        </Grid>

                    </Grid>
                    <Grid container spacing={1} p={2}
                        justify="space-around"
                        alignItems="center">
                        <Grid item xs={12} md={4}>    
                            <Operaciones/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={10} p={2}
                        justify="center"
                        alignItems="center"
                        style={{ position: "relative", marginTop: "50px" }}>
                        <Grid item xs={4} lg={2} m={2}>    
                            <CorrecBoton />
                        </Grid>
                        <Grid item xs={4} lg={2} m={2} >    
                            <Button
                            variant="contained"
                            startIcon={<RestorePageRoundedIcon />}
                            onClick={this.onResetClick.bind(this)}>Reset
                            </Button> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </React.Fragment>
  );
}

}


export default withRouter(withStyles(styles)(Cronometrado));