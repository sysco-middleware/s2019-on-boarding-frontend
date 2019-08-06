import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Grid } from "semantic-ui-react";
import Typography from "@material-ui/core/Typography";

import { InputField, CheckboxField } from "react-semantic-redux-form";
import * as Validation from "../../../constants/ValidationOptions";

let SimpleForm = props => {
  const { handleSubmit, reset } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Grant access to Important systems:
      </Typography>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Field
              name="firstName"
              component={InputField}
              label="Fornavn"
              placeholder="Fornavn"
              disabled={true}
            />
          </Grid.Column>
          <Grid.Column>
            <Field
              name="lastName"
              component={InputField}
              label="Etternavn"
              placeholder="Etternavn"
              disabled={true}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Field
              name="phoneNumber"
              component={InputField}
              label="Phone Number"
              placeholder="Phone Number"
              disabled={true}
            />
          </Grid.Column>
          <Grid.Column>
            <Field
              name="personalEmail"
              component={InputField}
              label="Personlig E-post"
              placeholder="Personlig E-post"
              disabled={true}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Group>
              <Field
                name="phonero"
                component={CheckboxField}
                label="Contact on mb.phonero.no is created"
                validate={Validation.required}
                toggle
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group>
              <Field
                name="equipmnet"
                component={CheckboxField}
                label="Utstyr is ready"
                validate={Validation.required}
                toggle
              />
            </Form.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Field control={Button} primary fluid type="submit">
              Complete Form
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
              Reset Form
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
