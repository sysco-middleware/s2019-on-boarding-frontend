import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { SelectField } from "react-semantic-redux-form";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import { Form, Grid, Button } from "semantic-ui-react";
import {
  InputField,
  TextAreaField,
  CheckboxField
} from "react-semantic-redux-form";
import "react-datepicker/dist/react-datepicker.css";
import Typography from "@material-ui/core/Typography";

const depOpt = [
  { key: "middleware", value: "Middleware", text: "Middleware" },
  { key: "frontend", value: "Frontend", text: "Frontend" },
  { key: "developer", value: "Developer", text: "Full Stack" },
  { key: "administration", value: "Administration", text: "Administation" },
  { key: "economics", value: "Aconomics", text: "Economics" }
];

let SimpleForm = props => {
  const {
    handleSubmit,
    firstNameValue,
    lastNameValue,
    personalEmailValue,
    phoneNumberValue,
    bankAcountValue,
    positionValue,
    registredADValue,
    equipmentValue,
    startDateValue,
    nearestBossValue,
    vismaExpenseValue,
    vismaSalaryValue,
    vismaSeveraValue,
    registredSeveraValue, 
    departmentValue
  } = props;

  function handleClick(e) {
    e.preventDefault();
    var doc = new jsPDF();
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.setFontStyle("normal");
    var resAD = 'not registred';
    if (registredADValue === true) {
      resAD = 'registred';
    }
    var resSevera ='not registred';
    if (registredSeveraValue === true) {
      resSevera = 'registred';
    }
    doc.autoTable({
      head: [['Descpiption','Comment']],
      body: [['First Name',`${firstNameValue}`],['Last Name', `${lastNameValue}`],['Personal Email',`${personalEmailValue}`],['Phone Number', `${phoneNumberValue}`], ['Bank Acount',` ${bankAcountValue}`], ['Nearest Boss', `${nearestBossValue}`],['Position Description', `${positionValue}`], ['Start Date', `${startDateValue}`], ['Equipment', `${equipmentValue}`], ['Visma Severa', `${vismaSeveraValue}`], ['Visma Expense', `${vismaExpenseValue}`], ['Visma Salary', `${vismaSalaryValue}`], ['AD', resAD], ['Severa Systems', resSevera] ]
    });

  
    doc.save("CheckAccessForm.pdf");
  }

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
                name="personalNumber"
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
              <Form.Field control={Button} positive fluid onClick={handleClick}>
                Download PDF
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
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
  const personalNumberValue = selector(state, "personalNumber");
  const bankAcountValue = selector(state, "bankAcount");
  const personalEmailValue = selector(state, "personalEmail");
  const positionValue = selector(state, "position");
  const registredADValue = selector(state, "registredAD");
  const startDateValue = selector(state, "startDate");
  const nearestBossValue = selector(state, "boss");
  const equipmentValue = selector(state, "equipment");
  const phoneNumberValue = selector(state, "phoneNumber");
  const vismaSeveraValue = selector(state, "vismaSevera");
  const vismaExpenseValue = selector(state, "vismaExpense");
  const vismaSalaryValue = selector(state, "vismaSalary");
  const registredSeveraValue = selector(state, "registred");
  const departmentValue = selector(state, "Department");

  return {
    initialValues: state.entities.taskVariables
      ? state.entities.taskVariables.variables
      : {},
    firstNameValue,
    lastNameValue,
    personalEmailValue,
    bankAcountValue,
    personalNumberValue,
    positionValue,
    registredADValue,
    startDateValue,
    nearestBossValue,
    equipmentValue,
    phoneNumberValue,
    vismaSeveraValue,
    vismaExpenseValue,
    vismaSalaryValue,
    registredSeveraValue,
    departmentValue
  };
})(SimpleForm);

export default SimpleForm;
