import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'
import * as Validation from '../../../constants/ValidationOptions'

const SimpleForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field name='firstName' component={InputField} label='First Name' placeholder='First Name'
        validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
      <Field name='lastName' component={InputField} label='Last Name' placeholder='Last Name'
        validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]} />
      <Field name='personalEmail' component={InputField} label='Personal E-Mail' placeholder='Personal E-Mail'
        validate={[ Validation.required, Validation.minLength2, Validation.email ]}/>
      <Field name='Department' component='select' validate={[Validation.required]}>
        <option name='middleware'>Middleware</option>
        <option name='frontend'>Frontend</option>
        <option name='developer'>Full Stack</option>
        <option name='administration'>Administation</option>
        <option name='economics'>Economics</option>
      </Field>
      <Field name="boss" component={InputField} label="Nearest Boss" placeholder="Nearest boss"
      Validation={[Validation.required, Validation.minLength2, Validation.maxLength15]} />
      <Form.Field control={Button} primary type='submit'>Register</Form.Field>
    </Form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
