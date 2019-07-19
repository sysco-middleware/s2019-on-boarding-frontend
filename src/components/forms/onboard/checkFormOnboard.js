import React from "react";
import { Field, reduxForm , } from "redux-form";
import { connect } from "react-redux";

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

const styles = StyleSheet.create({
  page: { backgroundColor: "" },
  section: { color: "black", textAlign: "left", margin: 30 }
});

let SimpleForm = props => {

  const { handleSubmit} = props;
  

  return (
    <Form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              component={InputField}
              label="First Name"
              placeholder="First Name"
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
      
      <PDFDownloadLink document={<MyDoc />} fileName="CheckAccess.pdf">
        {({  loading }) =>
          loading ? "Loading document..." : "Download The Form!"
        }
      </PDFDownloadLink>
    </Form>
    
  );
};

const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>form values here</Text>
      </View>
    </Page>
  </Document>
);

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