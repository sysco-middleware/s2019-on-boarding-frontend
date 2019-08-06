import React, {useState} from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Form, Button, Grid } from "semantic-ui-react";
import {
  InputField,
  TextAreaField,
  SelectField
} from "react-semantic-redux-form";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import * as Validation from "../../../constants/ValidationOptions";
import Container from "@material-ui/core/Container";
import { Message } from 'semantic-ui-react'


let SimpleForm = props => {
  const { handleSubmit, reset, firstName, lastName, error } = props;

    const [isFalse, setIsFalse] = useState(false);
  function handleClick(e) {
    e.preventDefault();

    let data = {
      firstName: firstName,
      lastName: lastName
    };

    fetch("/api/v1/checkEmployes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(resp => {
    console.log(resp);
      if (resp !== true) {
        console.log("ok");
        handleSubmit();
      } else {
        setIsFalse(true);
      }
    });
  }

  const depOpt = [
    { key: "middleware", value: "Middleware", text: "Middleware" },
    { key: "frontend", value: "Frontend", text: "Frontend" },
    { key: "developer", value: "Developer", text: "Full Stack" },
    { key: "administration", value: "Administration", text: "Administation" },
    { key: "economics", value: "Aconomics", text: "Economics" }
  ];

  return (
    <Container fixed>
      <Form onSubmit={handleSubmit}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Field
                name="firstName"
                component={InputField}
                label="First Name"
                placeholder="First Name"
                validate={[
                  Validation.requiredName,
                  Validation.maxLength15,
                  Validation.minLength2
                ]}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="lastName"
                component={InputField}
                label="Last Name"
                placeholder="Last Name"
                validate={[
                  Validation.requiredName,
                  Validation.maxLength15,
                  Validation.minLength2
                ]}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="personalEmail"
                component={InputField}
                label="Personal E-Mail"
                placeholder="Personal E-Mail"
                validate={[Validation.required, Validation.email]}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Field
                name="phoneNumber"
                component={InputField}
                label="Phone Number"
                placeholder="Phone Number"
                validate={[Validation.required, Validation.Number]}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="personalNumber"
                component={InputField}
                label="Personal Number"
                placeholder="Personal Number"
                validate={[Validation.required, Validation.Number]}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="bankAcount"
                component={InputField}
                label="Bank Acount"
                placeholder="Bank Acount"
                validate={[Validation.required, Validation.Number]}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Field
                name="startDate"
                component={InputField}
                type="date"
                label="Start Date"
                placeholder="Start Date"
                validate={Validation.required}
              />
            </Grid.Column>
            <Grid.Column>
              <legend>Department</legend>
              <Field
                name="Department"
                component={SelectField}
                options={depOpt}
                validate={[Validation.required]}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="position"
                component={InputField}
                label="Position Description"
                placeholder="Position Description"
                validate={[Validation.required]}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Field
                name="equipment"
                component={TextAreaField}
                label="Equipment"
                placeholder="Equipment"
                validate={[Validation.required]}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="boss"
                component={InputField}
                label="Nearest Boss"
                placeholder="Nearest boss"
                validate={[
                  Validation.required,
                  Validation.requiredName,
                  Validation.minLength2,
                  Validation.maxLength15
                ]}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column />
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
            { isFalse 
            ? <Message negative header='The employe you entered has alredy been registered...' content='Please check that you have entered the correct FIRST and LAST name.'/>
            : null
            }
            </Grid.Column>
            </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field control={Button} positive fluid onClick={handleClick}>
                Validate and Start process
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
            <Form.Field
              control={Button}
              negative
              fluid
              type="button"
              onClick={reset}
            >
              Reset Fields
            </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  );
};

SimpleForm = reduxForm({
  form: "simple", // a unique identifier for this form
  //onSubmit: submit // submit function must be passed to onSubmit
})(SimpleForm);

const selector = formValueSelector("simple"); // <-- same as form name
SimpleForm = connect(state => {
  const { firstName, lastName } = selector(state, "firstName", "lastName");
  return {
    firstName,
    lastName
  };
})(SimpleForm);

export default SimpleForm;
