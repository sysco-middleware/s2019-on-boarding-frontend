import React, { Component } from "react";
import * as FormTypes from "./forms";
import {
  completeTask,
  startProcessInstance,
  loadTaskVariables
} from "../actions";
import { connect } from "react-redux";
import { employeActions } from "../actions/node-rest/employe-service";

class GenericForm extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (!this.state || !this.state.loading) {
      this.loadExistingVariables();
    }
  }

  render() {
    const { formKey, processDefinitionKey, taskId } = this.props;
    const Form = FormTypes[processDefinitionKey][formKey];
    if (taskId == null) {
      return (
        <div className="generic-form">
          <Form
            onSubmit={(values, dispatch) =>
              this.handleStartInstance(values, dispatch)
            }
          />
        </div>
      );
    } else {
      return (
        <div className="generic-form">
          <Form
            onSubmit={(values, dispatch) =>
              this.handleComplete(values, dispatch)
            }
          />
        </div>
      );
    }
  }

  loadExistingVariables() {
    let { form, dispatch, taskId } = this.props;
    if (form) {
      this.setState({ loading: true });
      dispatch(loadTaskVariables(taskId, form.registeredFields));
    }
  }

  handleComplete(values, dispatch) {
    let camVar = this.getBody(values);
    let monVar = this.completeBody(values);
    return dispatch(employeActions.update(monVar))
    //return dispatch(completeTask(this.props.taskId, camVar));
  }

  handleStartInstance(values, dispatch) {
    let camVar = this.getBody(values);
    let monVar = this.monooseBody(values);
    console.log(values);
    console.log(camVar);
    console.log(monVar);
    return dispatch(employeActions.register(monVar), startProcessInstance(this.props.processDefinitionKey, camVar))
  }

  getBody(values) {
    let variables = {};
    Object.keys(values).forEach(item => {
      variables[item] = { value: values[item] };
    });
    return {
      variables: variables
    };
  }

  monooseBody(values) {
    let variables = {};
    Object.keys(values).forEach(item => {
      console.log(values[item]);
      if(item !== "adAdmin") {
        variables[item] = values[item];
      } else {
        variables["accessGiven"] = { [item]: values[item] }
      }
    });
    return variables
  }

  completeBody(values) {
    let accessGiven = {}
    let variables = { accessGiven };

    Object.keys(values).forEach(item => {
      console.log(item)
      console.log(values[item]);
      if(item !== "firstName" && item !== "lastName" && item !== "department" && item !== "equipment" && item !== "personalEmail" && item !== "syscoEmail") {
        accessGiven[item] = values[item];
      } else {
        variables[item] = values[item];
      }
    });
    return variables;
  }

}

export default connect(state => ({}))(GenericForm);
