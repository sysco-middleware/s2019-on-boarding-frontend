import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import GenericForm from "../components/GenericForm";
import { loadProcessDefinitions, loadFormKey } from "../actions";


function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2)
    return parts
      .pop()
      .split(";")
      .shift();
}

class StartProcessPage extends Component {
  componentWillMount() {
    this.props.loadFormKey(this.props.process);
  }

  render() {
    const { process, formKey, processInstanceStarted } = this.props;
    let checkLogin = getCookie("LOGIN");
    if (checkLogin) {
      if (!formKey && !processInstanceStarted) {
        return <div>Loading Process Start Form</div>;
      } else if (processInstanceStarted) {
        return (
          <div>
            Process instance has been started.
            <Redirect to={`/tasklist/`} />
          </div>
        );
      } else {
        const key = formKey["undefined"].key;
        return (
          <div>
            <GenericForm formKey={key} processDefinitionKey={process} />
          </div>
        );
      }
    }else{
      return <Redirect to="/" />;
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params;
  return {
    ...params,
    ...state.entities
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadProcessDefinitions,
      loadFormKey
    }
  )(StartProcessPage)
);
