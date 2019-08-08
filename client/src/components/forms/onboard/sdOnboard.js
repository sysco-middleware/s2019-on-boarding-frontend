import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Form, Button, Grid } from "semantic-ui-react";
import { InputField, CheckboxField } from "react-semantic-redux-form";
import * as Validation from "../../../constants/ValidationOptions";

import Typography from "@material-ui/core/Typography";

let SimpleForm = props => {
  const { handleSubmit, reset, role } = props;
  let roleForm
  if(role === "Middleware & Integration"){
    roleForm = 
    <Grid.Row columns={1}>
    <Grid.Column>
      <Form.Group>
        <Field
          name="slack"
          component={CheckboxField}
          toggle
          label="Slack : Send bestilling til hung.huynh@sysco.no"
        />
      </Form.Group>
    </Grid.Column>
  </Grid.Row>;
  } else if(role === "Developer"){
    roleForm = 
    <Grid.Row columns={2}>
    <Grid.Column>
      <Form.Group>
        <Field
          name="slack"
          component={CheckboxField}
          toggle
          label="Slack : Send bestilling til Christian.veigner@sysco.no"
        />
      </Form.Group>
    </Grid.Column>
    <Grid.Column>
      <Form.Group>
        <Field
          name="bitbucketDev"
          component={CheckboxField}
          toggle
          label="Bitbucket: Send bestilling til Christian.veigner@sysco.no"
          validate={Validation.required}
        />
      </Form.Group>
    </Grid.Column>
  </Grid.Row>;
  } else if(role === "Finans"){
    roleForm = 
    <Grid.Row columns={1}>
    <Grid.Column>
      <Form.Group>
        <Field
          name="skl"
          component={CheckboxField}
          toggle
          label="Opprettes som bruker hos SKL"
        />
      </Form.Group>
    </Grid.Column>
  </Grid.Row>;
  }
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
              name="personalEmail"
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
            <Form.Group>
              <Field
                name="registredAD"
                component={CheckboxField}
                toggle
                label="Bruker registrert i AD"
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group>
              <Field
                name="registredOffice365"
                component={CheckboxField}
                toggle
                label="Bruker registrert i Office365"
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
              label="Sysco E-post"
              placeholder="Sysco E-post"
              validate={[Validation.required, Validation.emailSysco]}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Group>
              <Field
                name="phonero"
                component={CheckboxField}
                validate={Validation.required}
                toggle
                label="Bruker er opprettet som kontakt på mb.phonero.no"
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
            <Form.Group>
              <Field
                name="phoneUpdate"
                component={CheckboxField}
                toggle
                label="Mobilnummer må oppdateres på Workplace og AD"
                validate={Validation.required}
              />
            </Form.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form.Group>
              <Field
                name="wikiAccess"
                component={CheckboxField}
                validate={Validation.required}
                toggle
                label="Bruker er blitt opprettet i Wiki"
              />
            </Form.Group>
          </Grid.Column>
          <Grid.Column>
              <Field
                name="department"
                component={InputField}
                validate={[Validation.required]}
                disabled={true}
              />
          </Grid.Column>
        </Grid.Row>
        {roleForm}
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

const selector = formValueSelector("simpleForm");
SimpleForm = connect(state => {
  const role = selector(state, "department")
  return{
  initialValues: state.entities.taskVariables
    ? state.entities.taskVariables.variables
    : {},
    role
  };
})(SimpleForm);
export default SimpleForm;
