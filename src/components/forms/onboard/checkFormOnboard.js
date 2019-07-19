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

import { Form } from "semantic-ui-react";
import {
  InputField,
  TextAreaField,
  CheckboxField
} from "react-semantic-redux-form";
import "react-datepicker/dist/react-datepicker.css";
import PDF from "../../../middleware/PDF";

const styles = StyleSheet.create({
  page: { backgroundColor: "" },
  section: { color: "black", textAlign: "left", margin: 30 }
});


let SimpleForm = props => {
  const { handleSubmit, firstNameValue, lastNameValue } = props;

  console.log({ firstNameValue });
  console.log({ lastNameValue });

  return (
    <React.Fragment>
      <h1>{firstNameValue}</h1>
      <h1>{lastNameValue}</h1>
      <Form onSubmit={handleSubmit}>
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
        <Field
          name="phoneNumber"
          component={InputField}
          type="number"
          label="Phone Number"
          placeholder="Phone Number"
          disabled={true}
        />
        <Field
          name="personaNumber"
          component={InputField}
          type="number"
          label="Personal Number"
          placeholder="Personal Number"
          disabled={true}
        />
        <Field
          name="bankAcount"
          component={InputField}
          type="number"
          label="Bank Acount"
          placeholder="Bank Acount"
          disabled={true}
        />
        <Field
          name="startDate"
          component={InputField}
          type="date"
          label="Start Date"
          placeholder="Start Date"
          disabled={true}
        />
        <Field
          name="position"
          component={InputField}
          label="Position Description"
          placeholder="Position Description"
          disabled={true}
        />
        <Field
          name="equipment"
          component={TextAreaField}
          label="Equipment"
          placeholder="Equipment"
          disabled={true}
        />
        <Field
          name="boss"
          component={InputField}
          label="Nearest Boss"
          placeholder="Nearest boss"
          disabled={true}
        />
        <Field
          name="registredAD"
          component={CheckboxField}
          label="Registred in AD"
          disabled={true}
        />
        <Field
          name="registredOffice365"
          component={CheckboxField}
          label="Registred in Office365"
          disabled={true}
        />
        <Field
          name="vismaSevera"
          component={InputField}
          label="Visma Severa"
          placeholder="Visma Severa"
          disabled={true}
        />
        <Field
          name="vismaExpense"
          component={InputField}
          label="Visma Expense"
          placeholder="Visma Expense"
          disabled={true}
        />
        <Field
          name="vismaSalary"
          component={InputField}
          label="Visma Salary"
          placeholder="Visma Salary"
          disabled={true}
        />
        <Field
          name="registred"
          component={CheckboxField}
          label="Registred in Severa systems"
          disabled={true}
        />
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
      </Form>
    </React.Fragment>
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

SimpleForm = reduxForm({
  form: "simpleForm" // a unique identifier for this form
})(SimpleForm);

const selector = formValueSelector("simpleForm"); // <-- same as form name
SimpleForm = connect(state => {
  const firstNameValue = selector(state, "firstName");
  const lastNameValue = selector(state, "lastName");

  return {
    firstNameValue,
    lastNameValue
  };
})(SimpleForm);

export default SimpleForm;
