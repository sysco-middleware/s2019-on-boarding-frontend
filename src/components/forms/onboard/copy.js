import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Form } from "semantic-ui-react";
import { InputField } from 'react-semantic-redux-form';


let SimpleForm = props => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      
      <Field
              name="firstName"
              component={InputField}
              label="First Name"
              placeholder="First Name"
              //disabled={true}
            />
    
          <Field
            name="hasEmail"
            id="hasEmail"
            component="input"
            type="checkbox"
          />
    
    </Form>
  )
}

// The order of the decoration does not matter.

// Decorate with redux-form
SimpleForm = reduxForm({
  form: 'selectingFormValues' // a unique identifier for this form
})(SimpleForm)

// Decorate with connect to read form values
const selector = formValueSelector('selectingFormValues') // <-- same as form name
SimpleForm = connect(state => {
  // can select values individually
  const hasEmailValue = selector(state, 'hasEmail')
  const firstNameValue = selector(state, 'firstName')
  console.log({hasEmailValue});
  console.log({firstNameValue});
  // or together as a group
  return {
    hasEmailValue,
    firstNameValue
  }
})(SimpleForm)

export default SimpleForm