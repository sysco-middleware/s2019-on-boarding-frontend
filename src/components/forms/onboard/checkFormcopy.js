import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { Form, Button, Grid } from "semantic-ui-react";
import {
  InputField,
  TextAreaField,
  SelectField
} from "react-semantic-redux-form";
import "react-datepicker/dist/react-datepicker.css";
let SimpleForm = props => {
  const { handleSubmit, reset } = props
  
  return (
        <Form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component={InputField}
            label="First Name"
            placeholder="First Name"
            disabled={true}
          />
    
          <Field
            name="lastName"
            component={InputField}
            label="Last Name"
            placeholder="Last Name"
            disabled={true}

          />

          <Field
            name="personalEmail"
            component={InputField}
            label="Personal E-Mail"
            placeholder="Personal E-Mail"
            disabled={true}

          />
          <Field
            name="phoneNumber"
            component={InputField}
            type="number"
            label="Phone Number"
            placeholder="Phone Number"
            disabled={true}

          />
 
          <Field
            name="personaNumber"
            component={InputField}
            type="number"
            label="Personal Number"
            placeholder="Personal Number"
            disabled={true}

          />
 
          <Field
            name="bankAcount"
            component={InputField}
            type="number"
            label="Bank Acount"
            placeholder="Bank Acount"
            disabled={true}

          />
 
          <Field
            name="startDate"
            component={InputField}
            type="date"
            label="Start Date"
            placeholder="Start Date"
            disabled={true}

          />
          <Field
            name="position"
            component={InputField}
            label="Position Description"
            placeholder="Position Description"
            disabled={true}

          />
     
          <Field
            name="equipment"
            component={TextAreaField}
            label="Equipment"
            placeholder="Equipment"
            disabled={true}

          />
  
          <Field
            name="boss"
            component={InputField}
            label="Nearest Boss"
            placeholder="Nearest boss"
            disabled={true}

            
          />
       
    
  </Form>
  )
}

SimpleForm = reduxForm({
  form: "simpleForm",
  enableReinitialize: true
})(SimpleForm);
SimpleForm = connect(state => ({
  initialValues: state.entities.taskVariables
    ? state.entities.taskVariables.variables
    : {}
}))(SimpleForm);
export default SimpleForm;
