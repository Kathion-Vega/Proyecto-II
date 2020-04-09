import React from 'react';
/* import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import Tooltip from 'recharts/lib/component/Tooltip'; */
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withTheme } from '@material-ui/styles';

function SimpleLineChart(props) {
  /* const { theme, data } = props; */
  return (
    <React.Fragment>
      <CssBaseline />
      <Container width={1} >
        <Typography component="div" className = "caja">
          
        </Typography>
      </Container>
    </React.Fragment>
    // <ResponsiveContainer width="99%" height={225}>
    //   <BarChart data={data}>
    //     <XAxis dataKey="name"/>
    //     <Tooltip/>
    //     <Bar dataKey="Type" stackId="a" fill={theme.palette.primary.main} />
    //     <Bar dataKey="OtherType" stackId="a" fill={theme.palette.secondary.light} />
    //   </BarChart>
    // </ResponsiveContainer>
  );
}

export default withTheme(SimpleLineChart);