import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField, CheckboxField } from 'react-semantic-redux-form'
import * as Validation from '../../../constants/ValidationOptions'

let SimpleForm = props => {
  const { handleSubmit, reset } = props
  return (
    <Form onSubmit={handleSubmit}>
      <legend>HR department</legend>
      <Field name='firstName' component={InputField} label='First Name' placeholder='First Name'disabled={true}/>
      <Field name='lastName' component={InputField} label='Last Name' placeholder="Last Name" disabled={true}/>
      <Field name='personalEmail' component={InputField} label='Personal E-Mail' placeholder="Personal E-Mail" disabled={true}/>
      <Field name='workplace' component={InputField} label='Workplace and orgnisation structure' placeholder="Workplace and orgnisation structure" validate={[ Validation.required]}/>
      <Field name='equipment' component={InputField} label='Equipment' placeholder='Equipment' disabled ={true}/>
      <Form.Group>
          <Field name='equipmnetOrdered' component={CheckboxField} label='Equipment is ordered' />
      </Form.Group>
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
