import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { withStyles } from '@material-ui/core/styles';
import './App.css';
import PrincipalRuteo from './Componentes/PrincipalRuteo';
import Box from '@material-ui/core/Box';
import { blue, indigo } from '@material-ui/core/colors';

const styles = {
  root: {
    backgroundColor: 'red',
  },
  
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
};

class App extends Component {
  render() {
    return (
        <stylesProvider styles={styles}>
          <div className={this.props.classes.root}>
          
            <Box width="auto" bgcolor="grey.300" p={1} my={0.5 } height="100%">
              <PrincipalRuteo/>
            </Box>
          
        </div> 
      </stylesProvider>
    );
  }
}

export default withStyles(styles)(App);
