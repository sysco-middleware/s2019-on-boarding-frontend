import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField, CheckboxField} from 'react-semantic-redux-form'
import * as Validation from '../../../constants/ValidationOptions'

import Typography from '@material-ui/core/Typography';



let SimpleForm = props => {
  const { handleSubmit,reset} = props
  
  return (
  
    <Form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
        Grant access to Important systems: 
      </Typography>
        <Field name='firstName' component={InputField} label='First Name' placeholder='First Name' disabled={Validation.required}/>
        <Field name='lastName' component={InputField} label='Last Name' placeholder="Last Name" disabled={true}/>
        <Field name='personalEmail' component={InputField} label='Personal E-Mail' placeholder="Personal E-Mail" disabled={true}/>
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
          <Form.Field control={Button} primary type='button' onClick={reset}>Reset Fields</Form.Field>

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
