import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink
} from "@react-pdf/renderer";

import { Form, Grid, Button } from "semantic-ui-react";
import {
  InputField,
  TextAreaField,
  CheckboxField
} from "react-semantic-redux-form";
import "react-datepicker/dist/react-datepicker.css";
import PDF from "../../../middleware/PDF";
import Typography from "@material-ui/core/Typography";

const styles = StyleSheet.create({
  page: { backgroundColor: "" },
  section: { color: "black", textAlign: "left", margin: 30 }
});

let SimpleForm = props => {
  const { handleSubmit, firstNameValue, lastNameValue } = props;

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Confirm the right access has been given:
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
            </Grid.Column>{" "}
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
            </Grid.Column>{" "}
            <Grid.Column>
              <Field
                name="phoneNumber"
                component={InputField}
                type="number"
                label="Phone Number"
                placeholder="Phone Number"
                disabled={true}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <Field
                name="personaNumber"
                component={InputField}
                type="number"
                label="Personal Number"
                placeholder="Personal Number"
                disabled={true}
              />
            </Grid.Column>{" "}
            <Grid.Column>
              <Field
                name="bankAcount"
                component={InputField}
                type="number"
                label="Bank Acount"
                placeholder="Bank Acount"
                disabled={true}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            {" "}
            <Grid.Column>
              <Field
                name="startDate"
                component={InputField}
                type="date"
                label="Start Date"
                placeholder="Start Date"
                disabled={true}
              />
            </Grid.Column>{" "}
            <Grid.Column>
              <Field
                name="position"
                component={InputField}
                label="Position Description"
                placeholder="Position Description"
                disabled={true}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Field
                name="equipment"
                component={TextAreaField}
                label="Equipment"
                placeholder="Equipment"
                disabled={true}
              />
            </Grid.Column>{" "}
            <Grid.Column>
              <Field
                name="boss"
                component={InputField}
                label="Nearest Boss"
                placeholder="Nearest boss"
                disabled={true}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <Field
                name="registredAD"
                component={CheckboxField}
                label="Registred in AD"
                disabled={true}
              />
            </Grid.Column>{" "}
            <Grid.Column>
              <Field
                name="registredOffice365"
                component={CheckboxField}
                label="Registred in Office365"
                disabled={true}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Field
                name="vismaSevera"
                component={InputField}
                label="Visma Severa"
                placeholder="Visma Severa"
                disabled={true}
              />
            </Grid.Column>{" "}
            <Grid.Column>
              <Field
                name="vismaExpense"
                component={InputField}
                label="Visma Expense"
                placeholder="Visma Expense"
                disabled={true}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <Field
                name="vismaSalary"
                component={InputField}
                label="Visma Salary"
                placeholder="Visma Salary"
                disabled={true}
              />
            </Grid.Column>{" "}
            <Grid.Column>
              <Field
                name="registred"
                component={CheckboxField}
                label="Registred in Severa systems"
                disabled={true}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <PDFDownloadLink
                document={
                  <PDF lnameValue={lastNameValue} fnameValue={firstNameValue} />
                }
                fileName="CheckAccess.pdf"
              >
                {({ loading }) =>
                  loading ? "Loading document..." : "Download The Form!"
                }
              </PDFDownloadLink>
            </Grid.Column><Grid.Column>
            <Form.Field control={Button} primary fluid type="submit">
              Complete
            </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </React.Fragment>
  );
};

SimpleForm = reduxForm({
  form: "simpleForm",
  enableReinitialize: true
})(SimpleForm);
const selector = formValueSelector("simpleForm");

SimpleForm = connect(state => {
  const firstNameValue = selector(state, "firstName");
  const lastNameValue = selector(state, "lastName");
  return {
    initialValues: state.entities.taskVariables
      ? state.entities.taskVariables.variables
      : {},
    firstNameValue,
    lastNameValue
  };
})(SimpleForm);

export default SimpleForm;
