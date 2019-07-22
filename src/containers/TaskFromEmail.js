import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import GenericForm from '../components/GenericForm'
import { loadTaskFormKey, loadProcessDefinitions } from '../actions'
import Container from '@material-ui/core/Container';

class TaskFromEmail extends Component {
  componentDidMount() {
    this.props.loadTaskFormKey(this.props.taskId);
    this.props.loadProcessDefinitions(this.props.processDefinitionId);
  }

  render() {
    const { taskId, processDefinitionId, formKey, processDefinition, simpleForm, redirect } = this.props
    if (redirect) {
      return (
        <Redirect to={`/formSubmitted`}/>
      )
    }
    if (formKey && processDefinition && processDefinition[processDefinitionId] != null) {
      const process = processDefinition[processDefinitionId].key
      const key = formKey['undefined'].key
      return (
        <div>
          <Container fixed className="margin-top-sm">
          <GenericForm form={simpleForm} taskId={taskId} formKey={key} processDefinitionKey={process} />
          </Container>
        </div>
      )
    } else {
      return (
        <div>
          <Container fixed className="margin-top-sm">
          Kunne ikke finne skjema. Har blitt fylt ut.
          </Container>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params
  return {
    ...params,
    ...state.entities,
    ...state.form,
    success: state.entities.redirect
  }
}

export default withRouter(connect(mapStateToProps, {
  loadTaskFormKey,
  loadProcessDefinitions
})(TaskFromEmail))
