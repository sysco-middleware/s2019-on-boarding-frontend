import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Grid } from "semantic-ui-react";
import {
  InputField,
  TextAreaField,
  SelectField
} from "react-semantic-redux-form";
import "react-datepicker/dist/react-datepicker.css";
import * as Validation from "../../../constants/ValidationOptions";
import Container from "@material-ui/core/Container";

const SimpleForm = props => {
  const { handleSubmit, reset } = props;

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
                  Validation.required,
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
                  Validation.required,
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
                validate={[
                  Validation.required,
                  Validation.minLength2,
                  Validation.email
                ]}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Field
                name="phoneNumber"
                component={InputField}
                type="number"
                label="Phone Number"
                placeholder="Phone Number"
                validate={[Validation.required]}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="personaNumber"
                component={InputField}
                type="number"
                label="Personal Number"
                placeholder="Personal Number"
                validate={[Validation.required]}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="bankAcount"
                component={InputField}
                type="number"
                label="Bank Acount"
                placeholder="Bank Acount"
                validate={[Validation.required]}
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
                  Validation.minLength2,
                  Validation.maxLength15
                ]}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field control={Button} primary fluid type="submit">
                Register
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
