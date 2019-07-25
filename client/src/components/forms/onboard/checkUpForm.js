import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Grid } from "semantic-ui-react";
import { InputField, TextAreaField } from "react-semantic-redux-form";
import "react-datepicker/dist/react-datepicker.css";
import * as Validation from "../../../constants/ValidationOptions";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const SimpleForm = props => {
  const { handleSubmit, reset } = props;

  return (
    <Container fixed>
      <Form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Please answer the questions bellow!
        </Typography>

        <legend>Do you think that the onboarding process was clear?</legend>
        <Field
          name="question1"
          component={InputField}
          label=" "
          placeholder=" "
          validate={[Validation.required]}
        />

        <legend>Did you get all instructions in time?</legend>
        <Field
          name="question2"
          component={InputField}
          label=" "
          placeholder=" "
          validate={[Validation.required]}
        />

        <legend>Did you get your equipment the day you started?</legend>
        <Field
          name="question3"
          component={InputField}
          label=" "
          placeholder=" "
          validate={[Validation.required]}
        />

        <legend>
          Did you get all accesses you needed the day you started?
        </legend>
        <Field
          name="question4"
          component={InputField}
          label=" "
          placeholder=" "
          validate={[Validation.required]}
        />

        <legend>
          Did you get 'Welcome Email' with all needed information about your
          accesses the day before you started?
        </legend>
        <Field
          name="question5"
          component={InputField}
          label=" "
          placeholder=" "
          validate={[Validation.required]}
        />
        <legend>
          Was it easy to contact someone from Sysco in case you had questions?
        </legend>
        <Field
          name="question6"
          component={InputField}
          label=" "
          placeholder=" "
        />
        <legend>Did the process meet your excpectations?</legend>
        <Field
          name="question7"
          component={InputField}
          label=" "
          placeholder=" "
          validate={[Validation.required]}
        />

        <legend>
          Do you have any other thoughts about your onboarding experiance?
        </legend>
        <Field
          name="question8"
          component={InputField}
          label=" "
          placeholder=" "
          validate={[Validation.required]}
        />

        <Form.Field
          control={Button}
          negative
          fluid
          type="button"
          onClick={reset}
        >
          Reset Fields
        </Form.Field>

        <Form.Field control={Button} primary fluid type="submit">
          Complete
        </Form.Field>
      </Form>
    </Container>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);
