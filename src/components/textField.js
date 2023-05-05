import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import '../App.css';
import './signIn.css';

class TextField extends React.Component{
    render(){
        const {label, type, isRequired, value, onChange} = this.props;
        return(
            <TextField
            className = 'field'
            InputLabelProps={{
                style: { color: 'rgb(174, 193, 209)', }, 
             }}
                label={this.label}
                type={this.type}
                required
                value={this.value}
                onChange={this.onChange}>
                
            </TextField>
        );
    };

}