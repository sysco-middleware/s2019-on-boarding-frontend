import React from 'react';
import clsx from 'clsx';
import { Form } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import * as Validation from '../../../constants/ValidationOptions'
import { Field, reduxForm } from 'redux-form'
import { InputField } from 'react-semantic-redux-form'
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
    
  }));
  /*const options = [
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
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

  return (
     
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        
        <Field
            name='firstName'
            component={TextField}
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


/*
<Field
        id="outlined-select-options"
        select
        label="Select"
        className={classes.textField}
        value={values.options}
        onChange={handleChange('options')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please Select Department"
        margin="normal"
        variant="outlined"
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Field>*/