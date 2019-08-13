import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Form, Button, Grid } from "semantic-ui-react";
import {
  InputField,
  TextAreaField,
  SelectField,
  CheckboxField
} from "react-semantic-redux-form";
import "react-datepicker/dist/react-datepicker.css";
import * as Validation from "../../../constants/ValidationOptions";
import Container from "@material-ui/core/Container";
import { Message } from 'semantic-ui-react';


let SimpleForm = props => {
  const { handleSubmit, duplicate, reset} = props;


  const depOpt = [
    { key: "middleware", value: "Middleware & Integration", text: "Middleware & Integration" },
    { key: "frontend", value: "Frontend", text: "Frontend" },
    { key: "developer", value: "Developer", text: "Developer" },
    { key: "finance", value: "Finans", text: "Finans" },
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
                label="Fornavn"
                placeholder="Fornavn"
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
                label="Etternavn"
                placeholder="Etternavn"
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
                label="Personlig E-post"
                placeholder="Personlig E-post"
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
                name="bankAccNumber"
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
                name="department"
                component={SelectField}
                options={depOpt}
                validate={[Validation.required]}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="positionDesc"
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
                name="nearestBoss"
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
            <Grid.Column>
            <Form.Group>
              <Field
                name="adAdmin"
                component={CheckboxField}
                toggle
                label="Nyansatt skal ha admin rettigheter i AD"
              />
            </Form.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column />
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
            { duplicate 
            ? <Message negative header='The employe you entered has alredy been registered...' content='Please check that you have entered the correct FIRST and Etternavn.'/>
            : null
            }
            </Grid.Column>
            </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field control={Button} positive fluid onClick={handleSubmit}>
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

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);