import React, { Component } from "react";
import  { withStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

import CardCorrido from "./CardCorrido.js";


const backgroundShape = require("../../imagenes/fondoCorrido.svg");

const styles = {

  root: {
    flexGrow: 1,
    
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
   
  },
  loadingState: {
    opacity: 0.05
  },
  paper: {
    
    textAlign: "left",
   

  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
   
  },
 
  outlinedButtom: {
    textTransform: "uppercase",
    
  },
  actionButtom: {
    textTransform: "uppercase",
    
    width: 152,
    height: 36
  },
  blockCenter: {
    
    textAlign: "center"
  },
  block: {
    
  },
  loanAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    
  },
  interestAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  mainBadge: {
    textAlign: "center",

  }
};

//const monthRange = Months;

class Dashboard extends Component {
  state = {
    loading: true,
    amount: 15000,
    period: 3,
    start: 0,
    monthlyInterest: 0,
    totalInterest: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    data: []
  };


  render() {
    const { classes } = this.props;
    const {
      amount,
      period,
      start,
      monthlyPayment,
      monthlyInterest,
      data,
      loading
    } = this.state;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        {/* <Topbar currentPath={currentPath} /> */}
        
        <div className={classes.root}>
          <Grid container justify="center">
            <h1>Cálculo Corrido</h1>
            <Grid
              spacing={0}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid container spacing={2} justify="center">
                <Grid item xs={12} md={2}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                    <CardCorrido/>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                    {/* <Loading loading={loading} /> */}
                    
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Dashboard));