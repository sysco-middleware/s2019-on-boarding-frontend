import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Grid } from "semantic-ui-react";
import { InputField, CheckboxField } from "react-semantic-redux-form";
import * as Validation from "../../../constants/ValidationOptions";
import Typography from "@material-ui/core/Typography";

class SimpleForm extends React.Component {
  render() {
    const { handleSubmit, reset } = this.props;
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
                name="syscoEmail"
                component={InputField}
                label="Personlig E-post"
                placeholder="Personlig E-post"
                disabled={true}
              />
            </Grid.Column>
            <Grid.Column>
              <Field
                name="equipment"
                component={InputField}
                label="Utstyr"
                placeholder="Utstyr"
                disabled={true}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <Field
                name="workplace"
                component={InputField}
                label="Legg til i workplace og organisasjonsstruktur"
                placeholder="Workplace and orgnisation structure"
                validate={[Validation.required]}
              />
            </Grid.Column>{" "}
            <Grid.Column>
              <Form.Group>
                <Field
                  name="equipmnetOrdered"
                  component={CheckboxField}
                  toggle
                  label="Utstyr er bestilt is ordered"
                />
              </Form.Group>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <Field
                name="pipedrive"
                component={InputField}
                label="Legg til i Pipedrive - info sendes frode.wagen@sysco.no"
                component={CheckboxField}
                toggle
              />
            </Grid.Column>{""}
            <Grid.Column>
              <Form.Group>
                <Field
                  name="accessCard"
                  component={CheckboxField}
                  toggle
                  label="Nøkkelkort/adgangskort bestilt"
                />
              </Form.Group>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field control={Button} primary fluid type="submit">
                Complete
              </Form.Field>
            </Grid.Column>{" "}
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
    );
  }
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
