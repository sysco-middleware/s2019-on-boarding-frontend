import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "semantic-ui-react";
import {
  InputField,
  CheckboxField,
  TextAreaField
} from "react-semantic-redux-form";
import * as Validation from "../../../constants/ValidationOptions";

let SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <legend>Servicedesk</legend>
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
      <Form.Group>
        <Field
          name="phonero"
          component={CheckboxField}
          label="Contact on mb.phonero.no is created"
          validate={Validation.required}
        />
        <Field
          name="equipmnet"
          component={CheckboxField}
          label="Equipment is ready"
          validate={Validation.required}
        />
      </Form.Group>
      <Form.Field control={Button} primary type="submit">
        Complete
      </Form.Field>
      <Form.Field control={Button} primary type="button" onClick={reset}>
        Reset Fields
      </Form.Field>
    </Form>
  );
};

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
