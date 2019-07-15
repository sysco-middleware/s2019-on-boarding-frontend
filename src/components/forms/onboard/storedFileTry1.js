import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import * as Validation from '../../../constants/ValidationOptions'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import MenuList from '@material-ui/core/MenuList';

const SimpleForm = props => {
  const { handleSubmit } = props

  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
      button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
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
    const classes = useStyles();
    const [values, setValues] = React.useState({
      
    });
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

  return (

  
    <Form onSubmit={handleSubmit} >
        <Field name='firstName' component={InputField} label='First Name' placeholder='First Name'
            validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
        <Field name='lastName' component={InputField} label='Last Name' placeholder='Last Name'
            validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]} />
        <Field name='personalEmail' component={InputField} label='Personal E-Mail' placeholder='Personal E-Mail'
            validate={[ Validation.required, Validation.minLength2, Validation.email ]}/>
        <Field name='bankAcount' component={InputField} label='Bank Acount' placeholder="Bank Acount"
            validate={[ Validation.required]}/>
        <Field name='personaNumber' component={InputField} label='Personal Number' placeholder="Personal Number"
            validate={[ Validation.required]}/> 
        <Field name='phoneNumber' component={InputField} label='Phone Number' placeholder="Phone Number"
            validate={[ Validation.required]}/>
        <legend>Department</legend>
        <Field name='Department' component='select' validate={[Validation.required]}>
            <option name='middleware'>Middleware</option>
            <option name='frontend'>Frontend</option>
            <option name='developer'>Full Stack</option>
            <option name='administration'>Administation</option>
            <option name='economics'>Economics</option>
        </Field>
        <Field name='position' component={InputField} label='Position Description' placeholder='Position Description'
            validate={[ Validation.required]}/>
        <TextField
            id="date" label="Start Date" type="date" defaultValue="2019-07-10" className={classes.textField}
            InputLabelProps={{
            shrink: true,}}
        />
        <Field name='equipment' component={InputField} label='Equipment' placeholder='Equipment'
            validate={[ Validation.required]}/>
        <Field name='boss' component={InputField} label='Nearest Boss' placeholder='Nearest boss'
            validate={[Validation.required, Validation.minLength2, Validation.maxLength15]} />
        <Button variant="contained" color ='primary' type='submit' >Register</Button>
        
    </Form>
  )
}





export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)

