import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField, CheckboxField, TextAreaField } from 'react-semantic-redux-form'
import * as Validation from '../../../constants/ValidationOptions'

let SimpleForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
    <legend>Servicedesk</legend>
    <Field name='firstName' component={InputField} label='First Name' placeholder='First Name'
        disabled={true}
    validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
    <Field name='lastName' component={InputField} label='Last Name' placeholder="Last Name"
        disabled={true}
    validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
    <Field name='personalEmail' component={InputField} label='Personal E-Mail' placeholder="Personal E-Mail"
      disabled={true}
      validate={[ Validation.required, Validation.email]}/>
      <Form.Group>
      <Field name='phonero' component={CheckboxField} label='Contact on mb.phonero.no is created' />

        <Field name='equipmnet' component={CheckboxField} label='Equipment is ready' />
      </Form.Group>
      <Form.Field control={Button} primary type='submit'>Complete</Form.Field>
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
