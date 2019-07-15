import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField, CheckboxField, TextAreaField } from 'react-semantic-redux-form'
import * as Validation from '../../../constants/ValidationOptions'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';




let SimpleForm = props => {
  const { handleSubmit } = props
  const { values: firstName } = props
 
 const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
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
  const classes = useStyles();
  
  return (
  
    <Form onSubmit={handleSubmit}>
      <div className={classes.root}>
        <legend>Accesses from Servicedesk</legend>
        <Field name='firstName' component={InputField} label='First Name' placeholder='First Name'
            validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
        <Field name='lastName' component={InputField} label='Last Name' placeholder="Last Name" disabled={true}/>
        <Field name='personalEmail' component={InputField} label='Personal E-Mail' placeholder="Personal E-Mail"
            disabled={true} validate={[ Validation.required, Validation.email]}/>
        <Field name='equipment' component={InputField} label='Equipment' placeholder='Equipment' disabled ={true}/>
        <Form.Group>
        <Field name='registredAD' component={CheckboxField} label='Registred in AD'/>
          </Form.Group>
        <Form.Group>
            <Field name='registredOffice365' component={CheckboxField} label='Registred in Office365' />
        </Form.Group>
          <Field name='syscoEmail' component={InputField} label='Sysco E-Mail' placeholder="Sysco E-Mail"
            validate={[ Validation.required, Validation.emailSysco]}/>
          <Form.Field control={Button} primary type='submit'>Complete</Form.Field>
          </div>
    </Form>
  )
}

SimpleForm = reduxForm({
  form: 'simpleForm',
  enableReinitialize: true
})(SimpleForm)
SimpleForm = connect(
  state => ({
    initialValues: state.entities.taskVariables ? state.entities.taskVariables.variables : {}
  })
)(SimpleForm)
export default SimpleForm
