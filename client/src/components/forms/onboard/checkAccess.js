import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField, CheckboxField, TextAreaField } from 'react-semantic-redux-form'
import * as Validation from '../../../constants/ValidationOptions'

let SimpleForm = props => {
  const { handleSubmit, reset } = props
  return (
    <Form onSubmit={handleSubmit}>
      <legend>HR department</legend>
      <Field name='firstName' component={InputField} label='Fornavn' placeholder='Fornavn'disabled={true}/>
      <Field name='lastName' component={InputField} label='Etternavn' placeholder="Etternavn" disabled={true}/>
      <Field name='personalEmail' component={InputField} label='Personlig E-post' placeholder="Personlig E-post" disabled={true}/>
      <Field name='workplace' component={InputField} label='Workplace and orgnisation structure' placeholder="Workplace and orgnisation structure" validate={[ Validation.required]}/>
      <Field name='Utstyr' component={InputField} label='utstyr' placeholder='utstyr' disabled ={true}/>
      <Form.Group>
          <Field name='equipmnetOrdered' component={CheckboxField} label='utstyr is ordered' />
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
