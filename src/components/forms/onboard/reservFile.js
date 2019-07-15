//react - redux
import React from 'react';
import clsx from 'clsx';
import { Form } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { useState } from "react";
import Image from 'react-image-resizer';

import * as Validation from '../../../constants/ValidationOptions'
import { InputField } from 'react-semantic-redux-form'
import logo from '../../../constants/logo.png'

// material ui
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import MenuList from '@material-ui/core/MenuList';
import Input from '@material-ui/core/Input';


/* not working: validation 
                TextFields(not stored in Camunda but InputField stored)
                props and how to pass data to components

*/


const SimpleForm = props => {
  const { handleSubmit } = props
  
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(0),
      width: 200,
      height: 80,
    },
    
    image: {
      border: '1px solid #ccc',
      background: '#fefefe',
      mode:'fit',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(0),
    },
    dense: {
      marginTop: 25,
    },
      button: {
      margin: theme.spacing(1),
    },
    input: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(0),
      width: 200,
     
    },
    button: {
      background: 'linear-gradient(45deg, #6200EA 30%, #2196F3 70%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 40,
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(0),
    },

    
  }));
  /*
  const options = [
      {
        value: 'Full Stack',
        label: 'Full Stack',
      },
      {
        value: 'MW',
        label: 'MW',
      },
      {
        value: 'Finance',
        label: 'Finance',
      },
      {
        value: 'Administration',
        label: 'Administration',
      },
    ];
    */
    const classes = useStyles();
    const [values, setValues] = React.useState({
      
    });
    const handleChange = input => event => {
      setValues({ ...values, [input]: event.target.value });
    };
    const [selectedDate, handleDateChange] = useState(new Date());
    
  

  return (
     
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <div>
        <Image
          src={logo}
          height={ 100 }
          width={ 150}
          className={classes.image}
        />
        </div>
        <Field
            name='firstName'
            component={TextField}
            validate={Validation.required} 
            label='First Name'
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
        />
         <Field
            component={TextField}
            id="standard-name"
            label="Last Name"
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
      />
        <Field
            component={TextField}
            id="standard-email"
            label="Personal Email"
            className={classes.textField}
            margin="normal"
            validate={[Validation.required, Validation.email]}
            InputLabelProps={{
              shrink: true,}}
      />
       <Field
            component={TextField}
            id="standard-bankAc"
            label="Bank Account"
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
      />
      <Field
            component={TextField}
            id="standard-persNum"
            label="Personal Number"
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
      />
      <Field
            component={TextField}
            id="standard-phNumber"
            label="Phone Number"
            className={classes.textField}   
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
      />
      <Field
            component={TextField}
            id="standard-posDesc"
            label="Position Description"
            className={classes.textField}   
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
      />
      
      <Field
            component={TextField}
            id="standard-equpment"
            label="Equipment"
            className={classes.textField}   
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
      />
      <Field
            component={TextField}
            id="standard-nBoss"
            label="Nearest Boss"
            className={classes.textField}   
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
      />
       <Field
            component={TextField}
            id="date" 
            label="Start Date"
            type="date" 
            defaultValue="2019-07-10" 
            className={classes.textField}
            InputLabelProps={{
              shrink: true,}}
        />
        <Field
            component={TextField}
            id="standard-position"
            label="Psition Description"
            className={classes.textField}   
            margin="normal"
            validate={Validation.required}
            InputLabelProps={{
              shrink: true,}}
      />
       <Field
            component={TextField}
            id="standard-respPerson"
            label="Person who filled in the form"
            className={classes.textField}   
            margin="normal"
            validate={Validation.required}
            InputLabelProps={{
              shrink: true,}}
      />
      <legend>Select Deparment</legend>
        <Field name='Department' component='select' validate={[Validation.required]} >
            <option name='middleware'>Middleware</option>
            <option name='frontend'>Frontend</option>
            <option name='developer'>Full Stack</option>
            <option name='administration'>Administation</option>
            <option name='economics'>Economics</option>
        </Field>
      </Grid>
      </Grid>
    </div>
        <Button variant="contained" color ='primary' type='submit' className={classes.button} >Register</Button>
    </form>
        

  )
}



export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
