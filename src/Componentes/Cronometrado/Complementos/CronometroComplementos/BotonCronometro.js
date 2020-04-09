import React, {Component}  from 'react';
import Button from '@material-ui/core/Button';



export  default class BotonCronometro extends Component {
  render() {
    return (
      <Button  onClick= {this.props.onClick} className={this.props.className} >
        {this.props.text}
      </Button>
    );
  }
}


