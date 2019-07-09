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
    <legend>Admin/Finance</legend>
    <Field name='firstName' component={InputField} label='First Name' placeholder='First Name'
        disabled={true}
    validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
    <Field name='lastName' component={InputField} label='Last Name' placeholder="Last Name"
        disabled={true}
    validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
    <Field name='personalEmail' component={InputField} label='Personal E-Mail' placeholder="Personal E-Mail"
      disabled={true}
      validate={[ Validation.required, Validation.email]}/>
      <Field name='vismaSevera' component={InputField} label='Visma Severa' placeholder="Visma Severa"
      validate={[ Validation.required, Validation.email]}/>
       <Field name='vismaExpense' component={InputField} label='Visma Expense' placeholder="Visma Expense"
      validate={[ Validation.required, Validation.email]}/>
    <Field name='vismaSalary' component={InputField} label='Visma Salary' placeholder="Visma Salary"
      validate={[ Validation.required, Validation.email]}/>
      <Form.Group>

        <Field name='registred' component={CheckboxField} label='Registred in Severa systems'/>
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
