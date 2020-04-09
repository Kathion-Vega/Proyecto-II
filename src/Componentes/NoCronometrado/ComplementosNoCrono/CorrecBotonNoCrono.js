import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RestorePageRoundedIcon from '@material-ui/icons/RestorePageRounded';


class CorrecBotonNoCrono extends Component {

    constructor() {
        super();
        this.state = {
            expense: 0,
            income: 0,
            resultMonth: 0,
            resultYear: 0
            
        }
    }
    handleClick(event) {
        alert('El resultado es...');
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        return (
            <div>
                <Button
                variant="contained"
                
                
                startIcon={<CheckCircleIcon />}
                >
                    <div onClick={this.handleClick}>Revisar</div>
                </Button>

            </div>
            
        )
    }
}


export default CorrecBotonNoCrono;