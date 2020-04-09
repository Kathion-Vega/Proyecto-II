import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Home from "./Home/Home";
import Cronometrado from "./Cronometrado/Cronometrado";
import NoCronometrado from "./NoCronometrado/NoCronometrado";
import Corrido from "./Corrido/Corrido";
import Instrucciones from "./Instrucciones/Instrucciones";
import Box from '@material-ui/core/Box' 
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AvTimerTwoToneIcon from '@material-ui/icons/AvTimerTwoTone';
import Typography from '@material-ui/core/Typography';
import TimerOffTwoToneIcon from '@material-ui/icons/TimerOffTwoTone';
import Filter1TwoToneIcon from '@material-ui/icons/Filter1TwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import ContactSupportTwoToneIcon from '@material-ui/icons/ContactSupportTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <BottomNavigationAction label="Home" value="home" icon={<HomeTwoToneIcon />} />,
    main: () => <Home/>
  },
  {
    path: "/cronometrado",
    sidebar: () => <BottomNavigationAction label="Cronometrado" value="cronometrado" icon={<AvTimerTwoToneIcon />} /> ,
    main: () => <Cronometrado/>
  },
  {
    path: "/nocronometrado",
    sidebar: () => <BottomNavigationAction label="NoCronometrado" value="nocronometrado" icon={<TimerOffTwoToneIcon />} /> ,
    main: () => <NoCronometrado/>
  },

  {
    path: "/corrido",
    sidebar: () => <BottomNavigationAction label="Corrido" value="corrido" icon={<Filter1TwoToneIcon />} /> ,
    main: () => <Corrido/>
  },
  {
    path: "/instrucciones",
    sidebar: () => <BottomNavigationAction label="Instrucciones" value="instrucciones" icon={<ContactSupportTwoToneIcon />} /> ,
    main: () => <Instrucciones/>
  }
];

export default function PrincipalRuteo() {
    
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    
    return (
        <Router>
            <Box display="flex"
              flexWrap="wrap"
              alignContent="flex-end"
              p={1}
              m={1}
              bgcolor="background.red"
              >
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-end"
              >
                <ButtonGroup value={value} onChange={handleChange} >
                  <Typography variant="h6" >
                    <div justify="center" >
                      <div>
                        <Link to="/">
                          <Tooltip title="Home" interactive>
                            <IconButton aria-label="home">
                              <BottomNavigationAction label="Home" value="home" icon={<HomeTwoToneIcon  style={{ fontSize: 50  }}/>} />
                            </IconButton> 
                          </Tooltip>
                        </Link>
                                        
                        <Link to="/cronometrado">
                          <Tooltip title="Cálculo Cronometrado" interactive>
                            <IconButton aria-label="home">
                              <BottomNavigationAction label="Cronometrado" value="cronometrado" icon={<AvTimerTwoToneIcon style={{ fontSize: 50 }} />} />
                            </IconButton>
                          </Tooltip>
                        </Link>

                        <Link to="/nocronometrado">
                          <Tooltip title="Cálculo No Cronometrado" interactive> 
                            <IconButton aria-label="home">
                              <BottomNavigationAction label="NoCronometrado" value="nocronometrado" icon={<TimerOffTwoToneIcon style={{ fontSize: 50 }} />} />
                            </IconButton>
                          </Tooltip>
                        </Link>

                                      
                        <Link to="/corrido">
                          <Tooltip title="Cálculo Corrido" interactive> 
                            <IconButton aria-label="home">
                              <BottomNavigationAction label="Corrido" value="corrido" icon={<Filter1TwoToneIcon style={{ fontSize: 50 }} />} />
                            </IconButton>
                          </Tooltip>
                        </Link>

                                                      
                        <Link to="/instrucciones">
                          <Tooltip title="Instrucciones" interactive>
                            <IconButton aria-label="home">    
                              <BottomNavigationAction label="Instrucciones" value="instrucciones" icon={<ContactSupportTwoToneIcon style={{ fontSize: 50 }} />} />
                            </IconButton>
                          </Tooltip>
                        </Link>

                           
                        <Switch>
                          {routes.map((route, index) => (
                                    
                            <Route
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              // children={<route.sidebar />}
                            />
                            ))}
                        </Switch>
                      </div>

                      <div>
                             
                        <Switch>
                          {routes.map((route, index) => (
                                 
                          <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                            />
                          ))}
                        </Switch>
                      </div>
                    </div>
                  </Typography>
                </ButtonGroup>
              </Grid>    
            </Box>
        </Router>
    );
}
