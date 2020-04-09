import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const backgroundShape = require("../../imagenes/fondoHome.svg");

const styles = ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: 561,
    paddingRight:200,
    marginRight:10,
    marginLeft:10,
    paddingLeft: 20,
    
  },
  grid: {
    width: 1200,
    height: "600px",
   
  },
});

//const monthRange = Months;

class DashHome extends Component {
  state = {
   
    data: []
  };


  render() {
    const { classes } = this.props;
    const {
      data,
      loading
    } = this.state;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        
        
        <div className={classes.root}>
          <Grid container justify="center">
            
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(DashHome));