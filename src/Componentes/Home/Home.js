import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DashHome from "./DashHome";
import "./Home.css";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container width={2} >
         <DashHome></DashHome>
      </Container>
     
    </React.Fragment>
  );
}