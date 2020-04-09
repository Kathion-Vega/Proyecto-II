import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  tamaño: {
    maxWidth: "50px",
    paddingLeft: theme.spacing(1),
    margin: 0,
 
    
  },
  
}));


function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <TableCell>{props.value}</TableCell>;
  }

function ListSimbolo(props){
    return <TableCell>{props.value}</TableCell>
}
  
function NumberList(props) {
    
    const numbers = props.numbers;
    
    const listItems = numbers.map((number) =>

      <ListItem key={number.toString()}
                value={number} />
    );
    const classes = useStyles();
    return (
      <TableCell className={classes.tamaño}>
            {listItems[Math.floor(Math.random()*listItems.length)]} 

      </TableCell>
    );
}
  
function SimbolList(props) {
    
    const simbolos = props.simbolos;
 
    const listSimbolos =simbolos.map((simbolo) =>
        <ListSimbolo key={simbolo.toString()}
                     value={simbolo} />
    );

    const classes = useStyles();
    return (
      <TableCell className={classes.tamaño}>
            {listSimbolos[Math.floor(Math.random()*listSimbolos.length)]}
      </TableCell>
    );
  }  
   
    const numbers = [1, 2, 3, 4, 5];
    const simbolos = ["+","-","*","/"];
    
  class Dictado extends React.Component {
      
        constructor(props){
            super(props);
            this.state={
                numbers: "",
                simbolos: ""
            }
        }
        handleChange = age => event => {
          this.setState({
            [age]: event.target.value,
          });
        };
        render() {
          
            return (
              <div>
                <TableRow>  
                    <NumberList numbers={numbers} /> 
                
                    <SimbolList simbolos={simbolos} />
                    
                      <NumberList numbers={numbers} style={{  marginRight: "0px" }} /> 
                    
                    <TableCell>
                      <TextField 
                        style={{ position: "relative", marginLeft: "0px" }}
                        id="outlined-number"
                        //label="Number"
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        //type="number"
                        
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                        />
                    </TableCell> 
                </TableRow> 
                <TableRow>   
                    <NumberList numbers={numbers} /> 
                
                    <SimbolList simbolos={simbolos} />
                    <TableCell>
                      <TextField 
                        
                        id="outlined-number"
                        //label="Number"
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        //type="number"
                        
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                      />
                    </TableCell> 
                </TableRow> 
                
                <TableRow> 
                   <NumberList numbers={numbers} /> 
                
                    <SimbolList simbolos={simbolos} />
                    <TableCell>
                      <TextField
                        id="outlined-number"
                        //label="Number"
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        //type="number"
                        
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                      />
                    </TableCell> 
               </TableRow>
                <TableRow> 
                    <NumberList numbers={numbers} /> 
               
                    <SimbolList simbolos={simbolos} /> 
                    <TableCell>
                      <TextField
                        id="outlined-number"
                        //label="Number"
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        //type="number"
                        
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                      />
                    </TableCell>
                </TableRow>
                <TableRow>    
                    <NumberList numbers={numbers} /> 
                
                    <SimbolList simbolos={simbolos} />
                
                
                  <TableCell>
                  <TextField
                    id="outlined-number"
                    //label="Number"
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    //type="number"
                    
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                  </TableCell> 
                  </TableRow>
                <TableRow>
                    <NumberList numbers={numbers} /> 
                  
                    <SimbolList simbolos={simbolos} /> 
                    <TableCell>
                  <TextField
                    id="outlined-number"
                    //label="Number"
                    value={this.state.age}
                    //onChange={this.handleChange('age')}
                    //type="number"
                    
                    
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>  
                  </TableRow>    
              </div>
            )
        }
    }

    export default Dictado;
        
  

// class Dictado extends React.Component {

//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.state = { random: 0 };
//     }

//     handleClick() {
//         const min = 1;
//         const max = 100;
//         //var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
//         const rand = min + Math.floor(Math.random() * (max - min));
//         this.setState({ random: this.state.random + rand });
//     }
//     render() {
//         return (
  
        
//             <div>
//                 <button onClick={this.handleClick.bind(this)}>Click</button>
//                 <div>The number is: {this.state.random}</div>
//             </div>
//         );
//     } 
// }

// export default Dictado;

// import React from 'react'


// export const ComputeValue = (component) => (
//   parseInt(
//     ReactDOMServer.renderToStaticMarkup(component)
//     .match(/<.*?>(.*?)<\/.*?>/i)[1]
//   )
// )

// export const Add = (props) => {
//   const result = props.children.reduce((acc, component) => {
//     return acc += ComputeValue(component)
//   }, 0)

//   return <span>{result}</span>
// }

// export const Subtract = (props) => (
//   <span>{ComputeValue(props.children) - ComputeValue(props.by)}</span>
// )

// export const Multiply = (props) => (
//   <span>{ComputeValue(props.children) * ComputeValue(props.by)}</span>
// )

// export const Divide = (props) => (
//   <span>{ComputeValue(props.children) / ComputeValue(props.by)}</span>
// )

// export const One = () => <span>1</span>
// export const Two = () => <Add><One/><One/></Add>
// export const Three = () => <Add><Two/><One/></Add>
// export const Four = () => <Add><Three/><One/></Add>
// export const Five = () => <Add><Four/><One/></Add>
// export const Six = () => <Add><Five/><One/></Add>
// export const Seven = () => <Add><Six/><One/></Add>
// export const Eight = () => <Add><Seven/><One/></Add>
// export const Nine = () => <Add><Eight/><One/></Add>