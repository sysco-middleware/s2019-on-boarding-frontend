import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Grid } from "semantic-ui-react";
import { InputField, CheckboxField } from "react-semantic-redux-form";
import * as Validation from "../../../constants/ValidationOptions";

import Typography from "@material-ui/core/Typography";

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
              label="First Name"
              placeholder="First Name"
              disabled={true}
            />
          </Grid.Column>
          <Grid.Column>
            <Field
              name="lastName"
              component={InputField}
              label="Last Name"
              placeholder="Last Name"
              disabled={true}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Field
              name="personalEmail"
              component={InputField}
              label="Personal E-Mail"
              placeholder="Personal E-Mail"
              disabled={true}
            />
          </Grid.Column>
          <Grid.Column>
            <Field
              name="equipment"
              component={InputField}
              label="Equipment"
              placeholder="Equipment"
              id="hei"
              disabled={true}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Group>
              <Field
                name="registredAD"
                component={CheckboxField}
                toggle
                label="Registred in AD"
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group>
              <Field
                name="registredOffice365"
                component={CheckboxField}
                toggle
                label="Registred in Office365"
                validate={Validation.required}
              />
            </Form.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Field
              name="syscoEmail"
              component={InputField}
              label="Sysco E-Mail"
              placeholder="Sysco E-Mail"
              validate={[Validation.required, Validation.emailSysco]}
            />
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
