import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// import "./Home.css";

export default function Instrucciones() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container width={1} >
        <Typography component="div" className = "caja">
            <h1>Instrucciones</h1> 
           
        </Typography>
      </Container>
    </React.Fragment>
  );
}