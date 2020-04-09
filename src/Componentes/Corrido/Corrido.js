import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DashCorrido from "./DashCorrido";
// import "./Home.css";

export default function Corrido() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container width={1} >
        <Typography component="div" className = "caja">
          <DashCorrido /> 
        </Typography>
      </Container>
    </React.Fragment>
  );
}