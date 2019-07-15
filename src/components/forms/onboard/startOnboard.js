import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form'
import "react-datepicker/dist/react-datepicker.css";
import * as Validation from '../../../constants/ValidationOptions'
import Container from '@material-ui/core/Container';



const SimpleForm = props => {
  const { handleSubmit } = props
  return (
    <Container fixed>
    <Form onSubmit={handleSubmit}>
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
        <Field name='phoneNumber' component={InputField} type="number" label='Phone Number' placeholder="Phone Number"
            validate={[ Validation.required]}/>
        <Field name='startDate' component={InputField}  type="date" label='Start Date' placeholder = "Start Date"/>
        <legend>Department</legend>
        <Field name='Department' component='select' validate={[Validation.required]}>
            <option name='middleware'>-- Select Department --</option>
            <option name='middleware'>Middleware</option>
            <option name='frontend'>Frontend</option>
            <option name='developer'>Full Stack</option>
            <option name='administration'>Administation</option>
            <option name='economics'>Economics</option>
        </Field>
        <Field name='position' component={InputField} label='Position Description' placeholder='Position Description'
            validate={[ Validation.required]}/>
        <Field name='equipment' component={InputField} label='Equipment' placeholder='Equipment'
            validate={[ Validation.required]}/>
        <Field name='boss' component={InputField} label='Nearest Boss' placeholder='Nearest boss'
            validate={[Validation.required, Validation.minLength2, Validation.maxLength15]} />
        <Form.Field control={Button} primary type='submit'>Register</Form.Field>
    </Form>
    </Container>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)